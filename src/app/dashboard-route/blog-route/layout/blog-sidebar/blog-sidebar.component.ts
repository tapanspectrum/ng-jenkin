import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core'; 
import { BlogServiceService } from '../../service/blog-service.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.css']
})
export class BlogSidebarComponent implements OnInit {
  imgUrl: string = 'http://127.0.0.1:8001/';
  @Input() blogId :any;
  getAllTags:any;
  getAllCat:any;
  getAllRecentPost:any;
  getRouteName:string ='';
  @Output() sendDataToParent = new EventEmitter<string>();
  @Output() sendDataToParentCatName = new EventEmitter<string>();
  @Output() sendDataToParentTag = new EventEmitter<string>();
  
  constructor(public blogService: BlogServiceService,private route: ActivatedRoute, public router: Router) { } 

  ngOnInit(): void {
    this.getRouteName =this.router.url;
    this.getcategory();
    this.gettags();
    this.getAllRecentPosts();
  }
  _sendDataToParent(data:string) {
    this.sendDataToParent.emit(data);
  }
  _sendDataToParentCatName(data:string) {
    this.sendDataToParentCatName.emit(data);
  }
  _sendDataToParentTag(data:string) {
    this.sendDataToParentTag.emit(data);
  }
  getcategory(){
    this.blogService.getCategories().subscribe((data) => {
      this.getAllCat = data;
    })
  }
  gettags(){
    this.blogService.getTags().subscribe((data) => {
      this.getAllTags = data;
    })
  }

  getAllRecentPosts(){
    this.blogService.getAllRecentPosts().subscribe((data) => {
      this.getAllRecentPost = data;
    })
  }

}
