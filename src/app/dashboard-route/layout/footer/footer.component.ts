import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DashServiceService } from '../../dashboard-content/dashboard-services/dash-service.service';
import swal from 'sweetalert2';  

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  newForm: FormGroup;
  constructor(public dashservice: DashServiceService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private fb: FormBuilder) {
      this.newForm = this.fb.group({
        email: ['',[Validators.required]],
      });
     }

  ngOnInit(): void {
  }
  toscroll(sectionId:string): void {
    document.getElementById(sectionId)?.scrollIntoView({behavior:"smooth"});
  }

  onSubmit() {
    let reqparams = {
      email: this.newForm.value.email,
      type:"newsletter"
    };
    this.dashservice.newsletter(reqparams).subscribe((commentres: any) => {
      if (commentres) {
        this.newForm.reset();
        swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          text: '  Added successfully !!',
          icon: 'success',
        });
      }
    });
  }

}
