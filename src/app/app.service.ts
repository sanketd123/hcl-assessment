import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {BaseURL} from './app.constant'

@Injectable()
export class HttpService {
    
    constructor(private http : HttpClient){
    }

    public getTransactions():Observable<any>{
        return this.http.get(BaseURL);        
    }
}   