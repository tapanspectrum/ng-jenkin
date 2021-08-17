import { Component, OnInit, Input } from '@angular/core';
import { DashServiceService } from '../../dashboard-content/dashboard-services/dash-service.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent implements OnInit {
  requirementForm: FormGroup;
  closeResult: any;
  modalReference: any;
  commentdata: any = {};
  reqparams: any;
  constructor(
    public dashboardService: DashServiceService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.requirementForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      contactno: ['', [Validators.required]],
      message: [''],
    });
  }

  ngOnInit(): void {}
  open(content: any, data: any) {
    this.commentdata = data;
    this.modalReference = this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit() {
    if (this.commentdata === 'website') {
      this.reqparams = {
        email: this.requirementForm.value.email,
        name: this.requirementForm.value.name,
        contactno: this.requirementForm.value.contactno,
        message: 'website is required',
        type: 'pricing',
        subject: 'Project Required',
      };
    } else if (this.commentdata === 'e-commerce') {
      this.reqparams = {
        email: this.requirementForm.value.email,
        name: this.requirementForm.value.name,
        contactno: this.requirementForm.value.contactno,
        message: 'e-commerce website is required',
        type: 'pricing',
        subject: 'Project Required',
      };
    } else if (this.commentdata === 'seo') {
      this.reqparams = {
        email: this.requirementForm.value.email,
        name: this.requirementForm.value.name,
        contactno: this.requirementForm.value.contactno,
        message: 'seo for website is required',
        type: 'pricing',
        subject: 'Project Required',
      };
    }

    this.dashboardService
      .requirementproject(this.reqparams)
      .subscribe((commentres: any) => {
        if (commentres) {
          this.requirementForm.reset();
          swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            title: 'Success!',
            text: '  Your requirement sent successfully !!',
            icon: 'success',
          });
          // document.getElementById('close_btn').click();
          // let element = document.getElementById('.close_btn')     ;
          (document.getElementById('close_btn') as HTMLFormElement).click();
        }
      });
  }
}
