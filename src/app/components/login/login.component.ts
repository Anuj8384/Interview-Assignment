import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock,faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
// font ICon
  faLock = faLock;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  fieldTextType:boolean=false;
  notMatched:boolean=false;

  //
  loginForm :FormGroup = new FormGroup({});
  
  
  
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}')]),
    });

    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }

  onSubmit(): void {
    
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value;
      this.auth.login(formValue).subscribe((res) => {
          
          if(res.success)
          {
            const user = res.data.user
            if (formValue.email === user.username && formValue.password === user.password) {
              this.notMatched = false;
              this.auth.setToken('abcdefghijklmnopqrstuvwxyz');
              this.router.navigate(['/admin']);
          }
          else{
            // alert("User Name or Password Not Match!")
            this.notMatched=true;
          }
          
            
          }
          
          
         
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    } else {
      this.loginForm.markAllAsTouched();
      // alert("please enter valid input!")
    }
  }
  get rc (){
    return this.loginForm.controls;
  }
  togglePwdField(){
    this.fieldTextType = !this.fieldTextType
  }
}



// ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$
// ^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,10}$