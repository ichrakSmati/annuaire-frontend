import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

import {Pole} from "./pole.model";
import {PoleService} from "./pole.service";

@Component({
    selector: 'app-pole',
    templateUrl: './pole.component.html',
    styles: []
})
export class PoleComponent implements OnInit {

    poles: Pole[];
    selectedPole: any;

    constructor(private router: Router, private poleService: PoleService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.poleService.getPoles()
            .subscribe( data => {
                this.poles = data;
            });
    }

    onUpdate(pole: any) {
        this.selectedPole = pole;
        this.router.navigate(['pole-update', this.selectedPole.id]);
    }

    onDelete(pole: any) : void {
        this.poleService.deletePole(pole)
            .subscribe(data => {
                this.poles = this.poles.filter(u => u !== pole);
                this.router.navigate(['poles']);
            });
    }


}
