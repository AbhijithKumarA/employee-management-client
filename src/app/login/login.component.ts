import { ToastrService } from 'ngx-toastr';
import { UserService } from './../shared/user.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formModel = {
    Username : '',
    Password : ''
  }

  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null) { 
      this.router.navigateByUrl('/homepage');
    }
    
  }

  onSubmit(f: NgForm){
    this.service.login(f.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/homepage');
        this.service.getUserProfile().subscribe(
          (res: any) => {
            localStorage.setItem('user', JSON.stringify(res));
          },
          err => {
            console.log(err);
          }
        );
      },
      err => {
        if(err.status == 400){
          this.toastr.error('Invalid username and/or password!', 'Login failed');
        }
        else
          console.log(err);
      }
    );
  }

}
