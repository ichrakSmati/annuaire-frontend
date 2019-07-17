import { Component, OnInit } from '@angular/core';
import {UserService} from "../user/user.service";
import {User} from "../user/user.model";
import {Pole} from "../pole/pole.model";
import {PoleService} from "../pole/pole.service";

@Component({
  selector: 'app-recherchepole',
  templateUrl: './recherchepole.component.html',
  styleUrls: ['./recherchepole.component.scss']
})
export class RecherchepoleComponent implements OnInit {
    constructor(private userService: UserService, private poleService: PoleService) {
    }
    poles: Array<Pole>;
    users: User[];

  ngOnInit() {
      this.poleService.getPoles()
          .subscribe( data => {
              this.poles = data;
          });

      this.userService.getUsers()
          .subscribe( data => {
              this.users = data;
          });

      // this.users.forEach((x: User) => {
      //     this.items.push(x.pole.nomService);
      // });
  }

}
