import { Component, OnInit } from '@angular/core';
import {User} from "./user.model";
import {UserService} from "./user.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
    user: any ;
    user1: User = new User() ;
    private userId: number;
    selectedUser: any;

    constructor(private  userService: UserService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.userId = Number.parseInt(params['id']);
        });
        console.log(this.userId);
        this.userService.getUser(this.userId).subscribe(data => {
            this.user = data;
            this.user1 = this.user;
        });
    }

    onUpdate(user: any) {
        this.selectedUser = user;
        this.router.navigate(['user-update', this.selectedUser.id]);
    }
}