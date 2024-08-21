import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GmailservService {
  private apiUrl =`${environment.baseurl}/gmailinfo.json`; // Your backend endpoint

  constructor(private http: HttpClient) {}

  sendEmail(emailData: any) {
    return this.http.post(`${this.apiUrl}`, emailData);
  }
}
