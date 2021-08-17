import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DashServiceService } from '../dashboard-services/dash-service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(
    public dashservice: DashServiceService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      subject: [''],
      message: [''],
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    let reqparams = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message,
      type: 'contact-us',
    };
    this.dashservice.contactUS(reqparams).subscribe((commentres: any) => {
      if (commentres) {
        this.contactForm.reset();
        swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          title: 'Success!',
          text: '  comment successfully posted !!',
          icon: 'success',
        });
      }
    });
  }
}
