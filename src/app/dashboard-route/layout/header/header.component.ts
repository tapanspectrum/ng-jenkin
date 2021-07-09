import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toscroll(sectionId:string): void {
    console.log(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({behavior:"smooth"});
  }

}
