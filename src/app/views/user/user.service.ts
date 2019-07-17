import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'Bearer ' + window.sessionStorage.getItem('AuthToken'),
        })};

    constructor(private http: HttpClient) {}

    private userUrl = 'http://localhost:8088/user/';
    private loginUrl = 'http://localhost:8088/login';
    private poleUrl = 'http://localhost:8088/pole/';

    public loginUser(username, password) {
        console.log(username);
        console.log(password);
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        // return this.http.delete(this.userUrl + username);
        return this.http.post<string>( this.loginUrl, username, password);
    }


    public getUsers() {
        return this.http.get<User[]>(this.userUrl, this.httpOptions);
    }

    public deleteUser(user) {
        return this.http.delete(this.userUrl +  user.id, this.httpOptions);
    }

    public createUser(user) {
        return this.http.post<User>(this.userUrl, user, this.httpOptions);
    }

    public getUser(id) {
        return this.http.get<User>(this.userUrl + id, this.httpOptions);
    }

    public getUsersByNomPrenom(nomPrenom) {
        console.log('user service');
        console.log(nomPrenom);
        return this.http.get<User[]>(this.userUrl + 'serach/' + nomPrenom, this.httpOptions);
    }

    public updateUser(user) {
        console.log("user service update");
        console.log(user.nomPrenom);
        return this.http.put<User>(this.userUrl + 'update' ,  user , this.httpOptions);
    }

    pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
        const formdata: FormData = new FormData();

        formdata.append('file', file);

        const req = new HttpRequest('POST', 'http://localhost:8088/cv/post', formdata, {
            reportProgress: true,
            responseType: 'text'
        });

        return this.http.request(req);
    }
}
