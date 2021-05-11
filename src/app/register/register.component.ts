import { ToastrService } from 'ngx-toastr';
import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.register().subscribe(
      (res: any) => {
        if(res.succeeded){
          this.service.formModel.reset();
          this.toastr.success('Registered successfully!', 'New User');
          this.router.navigateByUrl('/');
        }
        else{
          res.errors.forEach((element: any) => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken!','Failed to create new user');
                break;
              default:
                this.toastr.error(element.description, 'Failed to create new user');
                break;
            }
          });
        }
      },
      err => { console.log(err); }
    )
  }

}
