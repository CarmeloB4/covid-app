import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{

    const headers: HttpHeaders = new HttpHeaders({'X-Access-Token': environment.headersKey})

    return this.http.get<any>(environment.url, {headers})
  }
}
