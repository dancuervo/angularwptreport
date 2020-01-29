//modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
//servicios
import { ReportListService } from './report-list.service';
//componentes
import { AppComponent } from './app.component';
//modules
import { HttpClientModule } from '@angular/common/http';
//componentes
import { PanelNavComponent } from './panel-nav/panel-nav.component';
import { PanelFooterComponent } from './panel-footer/panel-footer.component';
import { PanelGetStartedComponent } from './panel-get-started/panel-get-started.component';
import { AboutComponent } from './about/about.component';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';
import { PanelListReportsComponent } from './panel-list-reports/panel-list-reports.component';
import { ReportFormComponent } from './report-form/report-form.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelNavComponent,
    PanelFooterComponent,
    PanelGetStartedComponent,
    AboutComponent,
    NotfoundcomponentComponent,
    PanelListReportsComponent,
    ReportFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ReportListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
