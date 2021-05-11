import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router, private service: UserService) { }

  userDetails : any;

  ngOnInit(): void { 
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

}
