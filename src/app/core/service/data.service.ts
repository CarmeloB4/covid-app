import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{

    const headers: HttpHeaders = new HttpHeaders({'X-Access-Token': environment.headersKey});

    return this.http.get<any>(environment.url, {headers}).pipe(
      map((val) => _.orderBy(val.Countries.map((c: any ) => {
          return {
            name: c.Country,
            value: c.TotalConfirmed
          };
        }
        ), ['value'], ['desc']).slice(0, 10)
      ));
  }
}
