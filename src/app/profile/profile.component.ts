import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetails : any;
  
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getUserProfile().subscribe(
      (res: any) => {
        this.userDetails = res;
        localStorage.setItem('user', res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
