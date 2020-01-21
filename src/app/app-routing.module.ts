import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelGetStartedComponent } from './panel-get-started/panel-get-started.component';
import { ReportFormComponent } from './report-form/report-form.component';

import { PanelListReportsComponent } from './panel-list-reports/panel-list-reports.component';
import { AboutComponent } from './about/about.component';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';


const routes: Routes = [
  { path: '', component:  PanelGetStartedComponent},
  { path: 'novorelatorio', component: ReportFormComponent},
  { path: 'listarelatorios', component: PanelListReportsComponent},
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotfoundcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
