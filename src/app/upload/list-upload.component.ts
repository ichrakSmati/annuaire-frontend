import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { Observable, Subject } from 'rxjs';
import { UploadService } from './upload.service';

@Component({
    selector: 'list-upload',
    templateUrl: './list-upload.component.html',
})
export class ListUploadComponent implements OnInit {

    showFile = false;
    fileUploads: Observable<string[]>;

    constructor(private uploadService: UploadService) { }

    ngOnInit() {
    }

    showFiles(enable: boolean) {
        this.showFile = enable;

        if (enable) {
            this.fileUploads = this.uploadService.getFiles();
        }
    }
}