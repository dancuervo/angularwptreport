import { Injectable } from '@angular/core';
import { Lista } from '../classes/wptreport/lista';
import { WPTReport } from 'src/classes/wptreport/wptreport';


@Injectable({
  providedIn: 'root'
})
export class ReportListService {

  l: any[] = [
    {
        ticket:"01", harString:'report0', platform: ['mobile','desktop'], website:"www.algo.com"
    },
    {
        ticket:"02", harString:'report1', platform: ['mobile','desktop'], website:"www.ccc.com"
    },
    {
        ticket:"03", harString:'report2', platform: ['mobile','desktop'], website:"www.ddd.com"
    },
    {
        ticket:"04", harString:'report3', platform: ['mobile','desktop'], website:"www.bbb.com"
    }
]
 

  constructor() {
    console.log('servicio funciona!')
  }

  getLista(): WPTReport [] {
    return this.l;
  }
}
