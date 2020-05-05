import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoadingService } from 'src/app/services/loading.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SweetAlertType } from 'src/app/classes/enums/SweetAlertType';
import { Storage } from '@ionic/storage';
import { User } from 'src/app/classes/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private form: FormGroup;
  private email: string;
  private password: string;
  private defaultUsers: Array<User> = [];
  private user: User;

  private validation_messages = {
    'email': [
      { type: 'required', message: 'El email es requerido.' },
      { type: 'pattern', message: 'Ingrese un email válido.' }
    ],
    'password': [
      { type: 'required', message: 'La contraseña es requerida.' },
      { type: 'minlength', message: 'La password debe contener al menos 6 catacteres.' }
    ]
  };

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private loadingService: LoadingService,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.addDefaultUser();
    this.form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  addDefaultUser() {
    this.defaultUsers.push({ "id": 1, "email": "admin@admin.com", "password": "111111", "perfil": "admin", "sexo": "femenino" });
    this.defaultUsers.push({ "id": 2, "email": "invitado@invitado.com", "password": "222222", "perfil": "invitado", "sexo": "femenino" });
    this.defaultUsers.push({ "id": 3, "email": "usuario@usuario.com", "password": "333333", "perfil": "usuario", "sexo": "masculino" });
    this.defaultUsers.push({ "id": 4, "email": "anonimo@anonimo.com", "password": "444444", "perfil": "usuario", "sexo": "masculino" });
    this.defaultUsers.push({ "id": 5, "email": "tester@tester.com", "password": "555555", "perfil": "tester", "sexo": "femenino" });
  }

  onSubmitLogin(form) {
    this.loadingService.showLoading("Espere..");
    this.storage.set('profile', form.perfil);
    this.storage.set('password', form.password);
    this.userService.loginUser(form)
      .then(res => {
        this.loadingService.closeLoadingAndRedirect("/home");
      })
      .catch(err => {
        this.loadingService.closeLoading("Error", "Verifique usuario y contraseña", SweetAlertType.Error);
      });
  }
}
