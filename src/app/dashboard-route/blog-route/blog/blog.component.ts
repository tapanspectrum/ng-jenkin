import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../service/blog-service.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  listBlog: any;
  imgUrl: string = 'http://127.0.0.1:8001/';
  config: any;
  collection: any;
  itemsPerPage: any = 2;
  currentPage: any = 1;
  totalItems: any;
  p: any;
  dataFromChild:any;
  userdetails:any;

  constructor(public blogService: BlogServiceService,public toastr: ToastrService        ) {}

  ngOnInit(): void {
    // this.toscroll('main');
    this.toscroll('blog');
    this.listOfBlog();
    this.toastr.success('hello world', 'Success!');
  }

  pageChanged($event: any): void {
    this.config.currentPage = $event;
  }

  toscroll(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  listOfBlog() {
    this.blogService.getBlog().subscribe((data) => {
      this.listBlog = data;
      this.collection = data;
      this.totalItems = data.length;
    });
  }
  eventFromChild(data:any) {
    if(data){
      let queryString ={
        "query": data
      };
      this.blogService.searchQuery(queryString).subscribe((data: any) => {
        if(data.length < 1){
          this.toastr.error('data not found');
        }
        this.listBlog = data;
        this.collection = data;
        this.totalItems = data.length;    
      });      
    }else{
      this.blogService.searchQuery({ "query": ''}).subscribe((data: any) => {
        if(data.length < 1){
          this.toastr.error('data not found');
        }
        this.listBlog = data;
        this.collection = data;
        this.totalItems = data.length;    
      });
    }
  }

  eventFromChildCat(data:any) {
    if(data){
      let queryString ={
        "query": data
      };
      this.blogService.searchQueryCat(queryString).subscribe((data: any) => {
        this.listBlog = data;
        this.collection = data;
        this.totalItems = data.length;    
      });      
    }    
  }

  eventFromChildTag(data:any) {
    let queryString ={
      "query": data
    };
    this.blogService.searchQueryTag(queryString).subscribe((data: any) => {
      this.listBlog = data;
      this.collection = data;
      this.totalItems = data.length;    
    }); 
  }

  getUserDetails(data:any) {
    if(data){
      this.blogService.bloguserdata(data).subscribe((data: any) => {
        this.userdetails = data;  
      });      
    }   
     
  }

}
