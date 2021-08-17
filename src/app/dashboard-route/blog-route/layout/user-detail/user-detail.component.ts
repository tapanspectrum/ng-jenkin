import { Component, OnInit, Input ,SimpleChanges} from '@angular/core';
import { BlogServiceService } from '../../service/blog-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  imgUrl: string = 'http://127.0.0.1:8001/';
  userdetails:any;
  @Input() item: any;
  constructor(
    public blogService: BlogServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    this.getUserDetails(this.item);
  }
  getUserDetails(data: any) {
    this.blogService.bloguserdata(data).subscribe((data: any) => {
      this.userdetails = data;
    });
  }

}
