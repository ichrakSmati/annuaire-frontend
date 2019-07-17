import {Component, OnInit} from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";
import {User} from "../user/user.model";
import {UserService} from "../user/user.service";



@Component({
    selector: 'app-Recherche',
    templateUrl: 'recherche.component.html'
})


export class RechercheComponent implements OnInit {

    constructor(private userService: UserService) {
    }

    users: User[];
    items: string[] ;
    ngOnInit() {

        this.userService.getUsers()
            .subscribe( data => {
                this.users = data;
            });

        // this.users.forEach((x: User) => {
        //     this.items.push(x.nomPrenom);
        // });
    }
}