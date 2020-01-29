import { Component, OnInit } from '@angular/core';
import { ReportListService } from '../report-list.service';
import { WPTReport } from 'src/classes/wptreport/wptreport';

@Component({
  selector: 'app-panel-list-reports',
  templateUrl: './panel-list-reports.component.html',
  styleUrls: ['./panel-list-reports.component.scss']
})

export class PanelListReportsComponent implements OnInit {
    
    reports:WPTReport;

    constructor(private _lista: ReportListService) {}

    
    showLista(){
      return this._lista.getLista().subscribe((data:any) => this.reports = data)
    }
    
  /*
  showLista() {
    return this._lista.getLista().subscribe((data) => this.reports = {
      ticket: data['ticket'],
      harString: data['harString'],
      platform: data['platform'],
      website: data['website']
    })
  }
  */
  

  ngOnInit() {
    this.showLista()
  }

}