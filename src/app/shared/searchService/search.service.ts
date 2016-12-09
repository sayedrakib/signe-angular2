import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  constructor(private http: Http) {}

private _url: string = "https://minerva.lib.jyu.fi/api/signe-locations/search/";

searchWithQuery(query: string){
  return this.http.get(this._url + query).map((results: Response) => results.json());
}

}

export class Item {
  signum: string;
  originalsignum: string;
  description: string;
  collectioncode: string;
  locationid: string;
  floor: string;
  shelfnumber: string;
  note: string;

  constructor(obj?: any) {
    this.signum = obj && obj.signum || null;
    this.originalsignum = obj && obj.originalsignum || null;
    this.description = obj && obj.description || null;
    this.collectioncode = obj && obj.collectioncode || null;
    this.locationid = obj && obj.locationid || null;
    this.floor = obj && obj.floor || null;
    this.shelfnumber = obj && obj.shelfnumber || null;
    this.note = obj && obj.note || null;
  }
}
