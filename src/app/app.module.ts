import { NgModule } from '@angular/core';
import { BrowserModule , Title} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwPaginationModule } from 'jw-angular-pagination';
import { FormsModule } from '@angular/forms';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';


import { DashboardRouteModule } from './dashboard-route/dashboard-route.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DashboardRouteModule,
    NgbModule,
    NgxPageScrollModule,
    JwPaginationModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    Title,BsModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
