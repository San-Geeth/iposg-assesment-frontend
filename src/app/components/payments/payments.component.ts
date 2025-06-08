import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {

  selectedFile: File | null = null;

  constructor(private coreService: CoreService) {}

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  // Called when upload button is clicked
  upload(): void {
    if (!this.selectedFile) {
      console.warn('No file selected');
      return;
    }

    this.coreService.uploadFile(this.selectedFile).subscribe({
      next: (res) => {
        console.log('Upload successful:', res);
      },
      error: (err) => {
        console.error('Upload failed:', err);
      }
    });
  }

}
