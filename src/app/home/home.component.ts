import { Component, OnInit } from '@angular/core';
import {IUser, UserModel} from '../shared/model/user.model';
import {UserService} from '../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: IUser;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser() ? this.userService.getUser() : new UserModel();
  }

}
