import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class FortniteServicesService {
  constructor(private http: HttpClient) {}

  public get(name: any): Observable<any> {
    return this.http.get(
      "https://fortnite-api.com/v1/stats/br/v2?language=it&name=" + name
    );
  }
}
