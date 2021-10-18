import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Login } from '../../models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onSubmitLogin: EventEmitter<Login> = new EventEmitter();

  email: string;
  password: string;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {
  }

  onSubmit(newLogin: Login){
    const val = this.form.value;
    if(val.email && val.password){ ß
      this.onSubmitLogin.emit(newLogin);

      this.form.reset();
    }
  }
}
