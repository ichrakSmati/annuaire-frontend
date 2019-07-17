import { Component, OnInit } from '@angular/core';
import {UserService} from "../user/user.service";
import {User} from "../user/user.model";
import {Pole} from "../pole/pole.model";
import {PoleService} from "../pole/pole.service";
import { Router } from '@angular/router';
import * as jspdf from 'jspdf';

import html2canvas from 'html2canvas';


@Component({
    selector: 'app-Rechercheavance',
    templateUrl: 'rechercheavance.component.html'
})


export class RechercheavanceComponent implements OnInit {

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
    captureScreen(){
        var data = document.getElementById('content');
        html2canvas(data).then(canvas => {
            // Few necessary setting options
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;

            const contentDataURL = canvas.toDataURL('image/png')
            let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
            pdf.save('ListeEmployee.pdf'); // Generated PDF
        });
    }

}