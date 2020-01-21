import { Component, OnInit } from '@angular/core';
import { Lista } from '../../classes/wptreport/lista';

@Component({
  selector: 'app-panel-list-reports',
  templateUrl: './panel-list-reports.component.html',
  styleUrls: ['./panel-list-reports.component.scss']
})
export class PanelListReportsComponent implements OnInit {

    list = ['repor01', 'report02'];
    model = new Lista( this.list );

    

  ngOnInit() {
  }

}
