import { Injectable } from '@angular/core';
//modules
import { HttpClient } from '@angular/common/http';

//import { WPTReport } from 'src/classes/wptreport/wptreport';


@Injectable()
export class ReportListService {

  url:string = '../assets/archivos/lista.json';
  
  constructor( private http: HttpClient ){
    console.log('servicio http funciona!')
  }

  getLista(){
    return this.http.get(this.url);
  }

}