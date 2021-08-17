import { Component, OnInit, Input } from '@angular/core';
import { BlogServiceService } from '../../blog-route/service/blog-service.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  swD :string ='';
  SEOS : string = '';
  readMore :Boolean = false;
  constructor(
    public blogService: BlogServiceService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.swD = 'Since its inception,Acharya Development has been a leading value-driven outsource software development company offering a range of services to clients representing different industries worldwide. The company provides custom software application development, e-commerce services, web design, and online promotion consultancy services to some of the well-known companies around the globe. We have a team of young, energetic and skilled pool of professionals covering different specialties of highest standards of work. The team at acharya development is well-adverse with all latest tools and technologies to develop solutions for clients empowering them to gain possible edge over their competitors.';
    this.SEOS = 'Acharya Development has been garnering a good reputation across the country from past one year. Our top level and highly customized service is designed to take your website to a highly level in search engine. SEO (Search Engine Optimization) is a strategic tool used for bringing good traffic to the website and ranking it on the top page of search engines like- Google, Bing, Yahoo, etc. Whether you are running billion dollar company or a start up, website needs a good traffic to reach to its target audience. This can only be done with the use optimization strategy';
  }

}
