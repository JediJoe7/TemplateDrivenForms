import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

// tslint:disable-next-line: variable-name
  _url = 'http://localhost:3000/enroll';
// tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  enroll(user: User) {
    return this._http.post<any>(this._url, user);
  }
}
