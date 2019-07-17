import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../service/auth.service';
import { TokenStorage } from '../service/token.storage';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private credential = {'username': '', 'password' : ''};
    username: string;
    password: string;
    user: any;
    constructor( private authService: AuthService, private router: Router, private token: TokenStorage) { }

    login(): void {

        this.authService.sendCredential(this.username, this.password).subscribe(
            data => {
                this.token.saveToken(data.token);
                console.log(this.token.getToken());

            },
            error => {
                console.log(error);

            },
            () => {
                this.authService.getUserAllData().subscribe(
                    data => {
                        this.user = data;
                        sessionStorage.setItem("ROLE", this.user.role.role);
                        sessionStorage.setItem("NomPrenom", this.user.nomPrenom);
                        sessionStorage.setItem("Email", this.user.email);
                        sessionStorage.setItem("DateRecrutement", this.user.dateRecurtement);
                        sessionStorage.setItem("NumTel", this.user.numTel);
                        sessionStorage.setItem("Pole", this.user.pole.nomService);
                        sessionStorage.setItem("Cv", this.user.cv);
                        sessionStorage.setItem("Photo", this.user.photo);
                        console.log(sessionStorage.getItem("ROLE"));
                        if(this.user.role.role == "ADMIN") {
                            this.router.navigate(['/users']);
                        }else {
                            this.router.navigate(['/pageUser']);
                        }

                    }
                );
            }
        );

    }

    ngOnInit() {

    }

}

