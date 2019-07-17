import { Component, OnInit } from '@angular/core';
import {UserService} from "../views/user/user.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {User} from "../views/user/user.model";
import * as jspdf from 'jspdf';

import html2canvas from 'html2canvas';

@Component({
    selector: 'app-showuser',
    templateUrl: './showuser.component.html',
    // styleUrls: ['./showuser.component.scss']
})
export class ShowuserComponent implements OnInit {

    user: any ;
    user1: User = new User() ;
    private userId: number;

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

    captureScreen(){
        var data = document.getElementById('contentToConvert');
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
            pdf.save('MYPdf.pdf'); // Generated PDF
        });
    }


}
