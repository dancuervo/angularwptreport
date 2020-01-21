import { Component } from '@angular/core';
import { WPTReport } from '../../classes/wptreport/wptreport';


@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})

export class ReportFormComponent {

  device = ['mobile', 'desktop'];

  model = new WPTReport('[X-0000XXXXXXXX]','191125_TN_478b44e7f48d43ccd208c748a22d27bc', this.device,'www.url.com');

  submitted = false;

  onSubmit() { this.submitted = true; console.log(this.model); this.newReport()}

  newReport(){
    this.model = new WPTReport('[Y-YYYYYYYYYYYYY]','000000_TN_478b44e7f48d43ccd208c748a22d27bc', this.device,'www.XXX.com');
  }
  
  //REMOVE
  get diagnostic() { return JSON.stringify(this.model);}
}