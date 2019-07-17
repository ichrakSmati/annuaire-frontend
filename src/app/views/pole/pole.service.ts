import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Pole} from "./pole.model";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PoleService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'Bearer ' + window.sessionStorage.getItem('AuthToken'),
        })};
    constructor(private http: HttpClient) {}
    private poleUrl = 'http://localhost:8088/pole/';

   // private poleUrl = '/api';

    public getPoles() {
        return this.http.get<Pole[]>(this.poleUrl, this.httpOptions);
    }

    public getPole(id) {
        return this.http.get<Pole>(this.poleUrl + id, this.httpOptions);
    }

    public updatePole(pole) {
        return this.http.put<Pole>(this.poleUrl + 'update' ,  pole, this.httpOptions );
    }
    public deletePole(pole) {
        return this.http.put<Pole>(this.poleUrl + 'disable' ,  pole, this.httpOptions );
    }

    public createPole(pole) {
        return this.http.post<Pole>(this.poleUrl, pole, this.httpOptions);
    }


}
