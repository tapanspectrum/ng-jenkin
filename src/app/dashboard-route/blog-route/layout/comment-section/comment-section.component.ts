import { Component, OnInit, Input } from '@angular/core';
import { BlogServiceService } from '../../service/blog-service.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css'],
})
export class CommentSectionComponent implements OnInit {
  @Input() item: any;
  blogComments: any = [];
  title = 'appBootstrap';
  commentdata: any = {};
  // :any;
  checkoutForm: FormGroup;
  closeResult: any;

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

  ngOnInit(): void {
    this.item.forEach((element: any) => {
      this.blogService.getComments(element).subscribe((data) => {
        this.blogComments.push(data[0]);
      });
    });
  }

  onSubmit(): void {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    let sendid = this.commentdata.commentId;
    this.commentdata.subcomment.push({
      comment: this.checkoutForm.value.comment,
      commentDate: Date.now(),
      email: this.checkoutForm.value.email,
      name: this.checkoutForm.value.name,
      status: 'Pending',
      website: this.checkoutForm.value.website,
    });

    this.blogService
      .LeaveReplyComponent(sendid, this.commentdata)
      .subscribe((data) => {
        if (data) {
          this.checkoutForm.reset();
          this.modalService.dismissAll('After Success Closed');
          this.toastr.success('comment successfully posted');
          this.toastr.info('message', 'title')
        }
      });
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
