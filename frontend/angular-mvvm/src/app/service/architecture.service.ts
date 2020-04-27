import { Http } from '@angular/http'
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ArchitectureService {

  private url = 'http://localhost/api/ArchitectureData'
  private url2 = 'http://localhost/api/ViewData'

  constructor(private http: Http) { }

  getSelectArchitectureGridData() {
    return this.http.get(`${this.url}/GetSelectedArchitectureGridData`);
  }

  getRelatedArchitecturesGridData(architectureId) {
    return this.http.get(`${this.url}/GetRelatedArchitecturesGridData/${architectureId}`);
  }

  getRelatedViewPointsGridData(architectureId) {
    return this.http.get(`${this.url2}/GetRelateViewsGridData/${architectureId}`);
  }


}
