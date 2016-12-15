import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UpdateDBservice {

  constructor(private http: Http) { }

  private updateDbURL = "https://minerva.lib.jyu.fi/api/signe-locations/update-database";

  updateDatabase(){
    return this.http.post(this.updateDbURL).map((results:Response) => results.json());
  }

}

export class Time {
  status: string;
  timestamp: string;

  constructor(obj?:any)
  {
  this.status = obj && obj.status || null;
  this.timestamp = obj && obj.timestamp || null;
  }

}
