import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { User } from './user.model';
import { UserService } from './user.service';
import { PoleService } from '../pole/pole.service';
import {Pole} from '../pole/pole.model';
import {Role} from '../../models/role.model';
import { UploadService } from '../../upload/upload.service';
@Component({
    templateUrl: './add-user.component.html'
})
export class AddUserComponent implements  OnInit {

    uploadService: UploadService;
    user: User = new User();
    pole: Pole = new Pole();
    role: Role = new Role();
    poles: Pole[];
    users: User[];
    selectedFiles: FileList;
    selectedPhoto: FileList;
    currentFileUpload: File;
    currentPhotoUpload: File;
    progress: { percentage: number } = { percentage: 0 };
    constructor(private router: Router, private userService: UserService ,private poleService: PoleService) {
    }

    ngOnInit() {
        this.poleService.getPoles()
            .subscribe( data => {
                this.poles = data;
            });
    }

    createUser(): void {
        this.upload();
        this.user.pole = this.pole;
        this.user.role = this.role;

        this.userService.createUser(this.user)
            .subscribe( dataUser => {
                this.router.navigate(['/show', this.user.id]);
            });
    }

    selectFile(event) {
        this.selectedFiles = event.target.files;
    }
    selectPhoto(event) {
        this.selectedPhoto = event.target.files;
    }

    upload() {
        this.progress.percentage = 0;
        this.currentFileUpload = this.selectedFiles.item(0);
        this.currentPhotoUpload = this.selectedPhoto.item(0);
        this.userService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.progress.percentage = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                console.log('File is completely uploaded!');
            }
        });
        this.userService.pushFileToStorage(this.currentPhotoUpload).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.progress.percentage = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
                console.log('Photo is completely uploaded!');
            }
        });
        this.user.cv = this.currentFileUpload.name;
        this.user.photo = this.currentPhotoUpload.name;
        this.selectedFiles = undefined;
        this.selectedPhoto = undefined;
    }

    checkUniqness(inputMail: String): boolean {
        this.userService.getUsers()
            .subscribe( data => {
                this.users = data;
            });

        this.users.forEach(function (value) {
            console.log(value);
        });
        return true;
    }

    emailChanged(): void {
        console.log('user mail:');
        console.log(this.user.email);
    }

}
