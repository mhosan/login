import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service' 
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authService.registerUser(this.email, this.password)
    .then((res)=>{
      //console.log(res);
      this.router.navigate(['/privado']);
    }).catch((err)=>{
      console.log(err);
    });
  }
}
