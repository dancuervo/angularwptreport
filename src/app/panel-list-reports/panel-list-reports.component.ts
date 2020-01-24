import { Component, OnInit } from '@angular/core';
import { ReportListService } from '../report-list.service';
//import { WPTReport } from 'src/classes/wptreport/wptreport';

@Component({
  selector: 'app-panel-list-reports',
  templateUrl: './panel-list-reports.component.html',
  styleUrls: ['./panel-list-reports.component.scss']
})
export class PanelListReportsComponent implements OnInit {

    
    reports:any[] = [];

    constructor(private _lista: ReportListService) { 
      this.reports = _lista.getLista();
    }

  ngOnInit() {
  }

}
  