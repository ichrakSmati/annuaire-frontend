import { Component, OnInit } from '@angular/core';
import {FindService} from "./find.service";
import {Router} from "@angular/router";
import {User} from "../user/user.model";

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {

    users: User[];
    user: User = new User();
    constructor(private router: Router, private findService: FindService) {

    }
  ngOnInit() {
  }

    searchUser(x): void {
      console.log(x);
    }
    // public findUserbyName(nom: string) {
    //     this.findService.findUser(nom)
    //         .subscribe( data => {
    //             this.users = data;
    //         });
    // }
}
