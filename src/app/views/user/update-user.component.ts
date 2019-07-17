import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import { PoleService } from '../pole/pole.service';
import {Pole} from '../pole/pole.model';
import {Role} from '../../models/role.model';
import { UploadService } from '../../upload/upload.service';
@Component({
    templateUrl: './update-user.component.html'
})
export class UpdateUserComponent implements OnInit {

    pole: Pole = new Pole();
    role: Role = new Role();
    user1: any;
    private userId: number;
    user: User = new User() ;
    poles: Pole[];
    selectedFiles: FileList;
    selectedPhoto: FileList;
    currentFileUpload: File;
    currentPhotoUpload: File;
    progress: { percentage: number } = { percentage: 0 };
    constructor(private router: Router, private userService: UserService, private poleService: PoleService, private route: ActivatedRoute ) {
    }

    ngOnInit() {
        this.poleService.getPoles()
            .subscribe( data => {
                this.poles = data;
            });


        this.route.params.forEach((params: Params) => {
            this.userId = Number.parseInt(params['id']);
        });

        this.userService.getUser(this.userId).subscribe(data => {
            this.user1 = data;
            this.user = this.user1;
            console.log(this.user.nomPrenom);
        });


    }

    updateUser(): void {
        this.upload();
        this.user.pole = this.pole;
        this.user.role = this.role;
        this.userService.updateUser(this.user)
            .subscribe( data => {
                console.log(this.user.role.id);
                this.router.navigate(['/users']);
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

}
