import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import(`./dashboard-route/dashboard-route.module`).then(
        (m) => m.DashboardRouteModule
      ),
    data: {
      title: 'Acharya Development',
      metaDescriptionContent:'Best Website Development Service Provider',
      metaAuthorContent:'Acharya Development',
      metakeywordsContent: 'website,website devlopment,best website developer '
    },
  }, 
  // {
  //   path: 'blog',
  //   // canActivate: [AuthGuardService],
  //   loadChildren: () =>
  //     import(`./dashboard-route/blog-route/blog-route.module`).then(
  //       (m) => m.BlogRouteModule
  //     ),
  //   data: {
  //     title: 'Acharya Development Blog ',
  //   },
  // },
  {
    path: '404',
    component: NotfoundComponent,
    data: {
      title: 'Page Not Found',
    },
  },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
