import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DashServiceService {
  baseURL: string = 'http://43.225.52.230:4000/api/';
  constructor(private http: HttpClient) {}

  contactUS(reqparams: any) : Observable<any>{
    return this.http.post(this.baseURL + 'contactus', reqparams);
  }

  newsletter(reqparams: any) : Observable<any>{
    return this.http.post(this.baseURL + 'newsletter', reqparams);
  }

  requirementproject(reqparams: any) : Observable<any>{
    return this.http.post(this.baseURL + 'requirementproject', reqparams);
  }
}
