import { Component, OnInit } from '@angular/core';
import {Pole} from "./pole.model";
import {PoleService} from "./pole.service";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-update-pole',
  templateUrl: './update-pole.component.html',
})
export class UpdatePoleComponent implements OnInit {
    pole: Pole = new Pole();
    pole1: any;
    private poleId: number;
    constructor(private router: Router, private poleService: PoleService, private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.poleId = Number.parseInt(params['id']);
        });

        this.poleService.getPole(this.poleId).subscribe(data => {
            this.pole1 = data;
            this.pole = this.pole1;
            console.log(this.pole.nomService);
        });


    }
    updatePole(): void {
        this.poleService.updatePole(this.pole)
            .subscribe(data => {
            this.router.navigate(['poles']);
        });
    }
}
