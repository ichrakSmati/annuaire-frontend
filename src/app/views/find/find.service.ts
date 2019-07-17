import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../user/user.model';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FindService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'Bearer ' + window.sessionStorage.getItem('AuthToken'),
        })};

    constructor(private http: HttpClient) {}
    private userUrl = 'http://localhost:8088/user-portal/annuaire/user/findby';

    public findUser(nom: string) {
        return this.http.get<User[]>( 'http://localhost:8088/user-portal/annuaire/user/find' + "/"+ nom, this.httpOptions);
    }


}
