import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-footer',
  templateUrl: './blog-footer.component.html',
  styleUrls: ['./blog-footer.component.css']
})
export class BlogFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toscroll(sectionId:string): void {
    console.log(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({behavior:"smooth"});
  }
}
