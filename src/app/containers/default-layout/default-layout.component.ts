import { Component, Input,  OnInit } from '@angular/core';
import { navItems } from './../../_nav';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements  OnInit{
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
    userPhoto: string;
  constructor(private router: Router) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized')
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

    ngOnInit() {
    console.log(window.sessionStorage.getItem('NomPrenom'));
      this.userPhoto = window.sessionStorage.getItem('Photo');
    }


    logout(): void {
        this.router.navigate(['/login']);
    }
}
