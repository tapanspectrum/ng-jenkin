import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwPaginationModule } from 'jw-angular-pagination';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal'; 
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BodyMainComponent } from './dashboard-content/body-main/body-main.component';
import { ClientsComponent } from './dashboard-content/clients/clients.component';
import { AboutComponent } from './dashboard-content/about/about.component';
import { CountsComponent } from './dashboard-content/counts/counts.component';
import { TabsComponent } from './dashboard-content/tabs/tabs.component';
import { ServicesComponent } from './dashboard-content/services/services.component';
import { PortfolioComponent } from './dashboard-content/portfolio/portfolio.component';
import { TestimonialsComponent } from './dashboard-content/testimonials/testimonials.component';
import { PricingComponent } from './dashboard-content/pricing/pricing.component';
import { FaqComponent } from './dashboard-content/faq/faq.component';
import { TeamComponent } from './dashboard-content/team/team.component';
import { ContactComponent } from './dashboard-content/contact/contact.component';
import { ReadmoreComponent } from '../shared/readmore/readmore.component';




@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    BodyMainComponent,
    ClientsComponent,
    AboutComponent,
    CountsComponent,
    TabsComponent,
    ServicesComponent,
    PortfolioComponent,
    TestimonialsComponent,
    PricingComponent,
    FaqComponent,
    TeamComponent,
    ContactComponent,
    ReadmoreComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    JwPaginationModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({ timeOut: 2000 ,enableHtml: true }),
    ModalModule.forRoot()
  ]
})
export class DashboardRouteModule { }
