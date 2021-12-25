import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  faUser = faUser;
  registerForm = new FormGroup({
    lname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    fname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    contactNo :new FormControl('',[Validators.required,Validators.minLength(13),Validators.maxLength(13),Validators.pattern('[- +()0-9]+')]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required),
  });
  
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.auth.register(this.registerForm.value)
      this.router.navigate(['../login'])
    }

  }
  // register Form Controls
  get rc (){
    return this.registerForm.controls;
  }



}
