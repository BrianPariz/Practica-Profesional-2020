import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Text } from '../models/text';
import { map } from 'rxjs/operators';
import { TipoLista } from '../models/enums/tipo-lista.enum';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  textRef: AngularFireList<Text>;

  constructor(db: AngularFireDatabase) {
    this.textRef = db.list('texts');
    this.textRef.snapshotChanges().subscribe(x => {
    });
  }

  save(text: Text) {
    return this.textRef.push(text);
  }
  updateItem(key: string, text: Text) {
    return this.textRef.update(key, text);
  }
  deleteItem(key: string) {
    return this.textRef.remove(key);
  }
  deleteEverything() {
    return this.textRef.remove();
  }

  GetAlltexts() {
    return this.textRef.snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .pipe(
        map(texts => {
          return texts.map(text => {
            text.fechaString = new Date(text.fecha).toLocaleString();
            return text;
          });
        })
      );
  }

  GetAlltextsByType(tipo: TipoLista) {
    return this.GetAlltexts().pipe(
      map(texts => {
        return texts.filter(text => {
          switch (tipo) {
            case TipoLista.A:
              return text.division === TipoLista.A;
            case TipoLista.B:
              return text.division === TipoLista.B;
          }
        });
      })
    );
  }

  GettextsByUser(uid: String, tipo: TipoLista) {
    return this.GetAlltextsByType(tipo).pipe(
      map(texts => {
        return texts.filter(text => {
          return text.uid === uid;
        });
      })
    );
  }
}
