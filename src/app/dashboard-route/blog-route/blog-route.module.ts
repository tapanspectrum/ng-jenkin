import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { BlogComponent } from './blog/blog.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogHeaderComponent } from './layout/blog-header/blog-header.component';
import { BlogFooterComponent } from './layout/blog-footer/blog-footer.component';
import { BlogSidebarComponent } from './layout/blog-sidebar/blog-sidebar.component';
import { UserDetailComponent } from './layout/user-detail/user-detail.component';
import { CommentSectionComponent } from './layout/comment-section/comment-section.component';
import { LeaveReplyComponent } from './layout/leave-reply/leave-reply.component'



@NgModule({
  declarations: [
    BlogComponent,
    SingleBlogComponent,
    BlogHeaderComponent,
    BlogFooterComponent,
    BlogSidebarComponent,
    UserDetailComponent,
    CommentSectionComponent,
    LeaveReplyComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({ timeOut: 2000 ,enableHtml: true }),
  ]
})
export class BlogRouteModule { }
