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
        localStorage.setItem('user', JSON.stringify(res));
        this.userDetails = res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
