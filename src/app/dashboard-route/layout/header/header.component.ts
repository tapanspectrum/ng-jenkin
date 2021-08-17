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
    document.getElementById(sectionId)?.scrollIntoView({behavior:"smooth"});
  }

}
