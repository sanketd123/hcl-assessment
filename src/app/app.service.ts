import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpService {
    public baseURL: string = 'http://localhost:3000/transactions';

    constructor(private http : HttpClient){
    }

    public getTransactions():Observable<any>{
        return this.http.get(this.baseURL);        
    }
}   