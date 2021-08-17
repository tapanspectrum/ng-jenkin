import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../service/blog-service.service';
import { ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css'],
})
export class SingleBlogComponent implements OnInit {
  imgUrl: string = 'http://127.0.0.1:8001/';
  blogId: any;
  blogContent: any;
  blogComments: any = [];
  commentsId: any;
  dataFromChild: any;
  userdetails: any;
  blogCreaterID:any;
  constructor(
    public blogService: BlogServiceService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.blogId = params['id'];
      this.getSingleBlogData(this.blogId);
    });
  }

  eventFromChild(data: any) {
    if (data) {
      let queryString = {
        query: data,
      };
      this.blogService.searchQuery(queryString).subscribe((data: any) => {
        if (data) {
          this.getSingleBlogData(data[0].bolgId);
        }
      });
    }
  }

  getSingleBlogData(id: string) {
    this.blogService.getSingleBlog(id).subscribe((data) => {
      this.blogContent = data[0];
      this.commentsId = this.blogContent.commentId;
      this.blogCreaterID = this.blogContent.blogCreater;
      if(this.blogContent.length < 1){
        this.toastr.error('data not found');
      }
    });
  }
}
