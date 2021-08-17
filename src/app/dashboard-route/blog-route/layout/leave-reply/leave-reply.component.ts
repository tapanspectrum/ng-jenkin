import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../../service/blog-service.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-leave-reply',
  templateUrl: './leave-reply.component.html',
  styleUrls: ['./leave-reply.component.css'],
})
export class LeaveReplyComponent implements OnInit {
  blogComments: any = [];
  title = 'appBootstrap';
  commentdata: any = {};
  // :any;
  checkoutForm: FormGroup;
  closeResult: any;
  blogId: any;
  blogdetails: any = {};

  constructor(
    public blogService: BlogServiceService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.checkoutForm = this.fb.group({
      name: [''],
      email: [''],
      website: [''],
      comment: [''],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.blogId = params['id'];
    });
    this.getblog();
  }

  getblog() {
    this.blogService.getSingleBlog(this.blogId).subscribe((data) => {
      this.blogdetails = data[0];
    });
  }

  onSubmit(): void {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    let reqparams = {
      name: this.checkoutForm.value.name,
      email: this.checkoutForm.value.email,
      website: this.checkoutForm.value.website,
      comment: this.checkoutForm.value.comment,
      status: 'Approve'
    };
    this.blogService.PostComment(reqparams).subscribe((commentres: any) => {
      if (commentres) {
        this.blogdetails.commentId.push(commentres.commentId);
        this.blogService
          .updateBlog(this.blogId, this.blogdetails)
          .subscribe((data) => {
            if (data) {
              this.checkoutForm.reset();
              this.modalService.dismissAll('After Success Closed');
              this.toastr.success('comment successfully posted');
              this.toastr.info('message', 'title');
            }
          });
      }
    });
    // this.blogdetails.commentId.push();

    // this.blogService
    //   .LeaveReplyComponent(sendid, this.commentdata)
    //   .subscribe((data) => {
    //     if (data) {
    //       this.checkoutForm.reset();
    //       this.modalService.dismissAll('After Success Closed');
    //       this.toastr.success('comment successfully posted');
    //       this.toastr.info('message', 'title');
    //     }
    //   });
  }

  open(content: any, data: any) {
    this.commentdata = data;
    this.modalService
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
}
