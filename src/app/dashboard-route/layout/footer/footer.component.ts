import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toscroll(sectionId:string): void {
    console.log(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({behavior:"smooth"});
  }

}
