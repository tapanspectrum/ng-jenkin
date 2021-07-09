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
  },
  {
    path: 'blog',
    // canActivate: [AuthGuardService],
    loadChildren: () =>
      import(`./dashboard-route/blog-route/blog-route.module`).then((m) => m.BlogRouteModule),
  },
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
