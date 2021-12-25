import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faLock = faLock;
  loginForm = new FormGroup({
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
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/admin']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    } else {
      alert("please enter valid input!")
    }
  }
  get rc (){
    return this.loginForm.controls;
  }
}
