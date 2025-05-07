import { Component } from '@angular/core';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  file!: File;
  fileUrl: string = '';

  constructor(private uploadService: FileUploadService) {}

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  upload() {
    if (this.file) {
      this.uploadService.upload(this.file).subscribe((res) => {
        this.fileUrl = res.fileUrl;
      });
    }
  }
}
