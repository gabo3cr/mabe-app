import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-authorized-user',
  templateUrl: './authorized-user.page.html',
  styleUrls: ['./authorized-user.page.scss'],
})
export class AuthorizedUserPage implements OnInit {

  user: any = {};

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }
}
