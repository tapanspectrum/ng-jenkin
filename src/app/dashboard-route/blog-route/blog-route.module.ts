import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    BlogRoutingModule
  ]
})
export class BlogRouteModule { }
