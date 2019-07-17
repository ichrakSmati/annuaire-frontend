import { Component, OnInit } from '@angular/core';
import {Pole} from "./pole.model";
import {PoleService} from "./pole.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-pole',
  templateUrl: './add-pole.component.html',
  styleUrls: ['./add-pole.component.css']
})
export class AddPoleComponent  {
    pole: Pole = new Pole();

    constructor(private router: Router, private poleService: PoleService) {

    }
      createPole(): void {
      this.poleService.createPole(this.pole)
      .subscribe(data => {
          alert('Pole created successfully.');
      });
 }

}
