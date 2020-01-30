import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediadataService {

  constructor(public http:HttpClient) {
    
   }
}
