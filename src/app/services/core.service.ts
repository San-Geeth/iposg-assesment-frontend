import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

const CORE_BASE_URL = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });

    return this.http.post(`${CORE_BASE_URL}/payments/upload`, formData, {
      headers: headers
    });
  }
}
