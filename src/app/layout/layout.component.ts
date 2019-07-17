import { Component, OnInit } from '@angular/core';
import {UserService} from "../views/user/user.service";
import {User} from "../views/user/user.model";
import {Pole} from "../views/pole/pole.model";
import {PoleService} from "../views/pole/pole.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    constructor(private router: Router ,private userService: UserService, private poleService: PoleService) {
    }

    poles: Array<Pole>;
    users: User[];

    ngOnInit() {
        this.poleService.getPoles()
            .subscribe(data => {
                this.poles = data;
            });


        this.userService.getUsers()
            .subscribe(data => {
                this.users = data;
            });


    }

    onSelect(user: User) {
        this.router.navigate(['userInfo/', user.id]);
    }
}