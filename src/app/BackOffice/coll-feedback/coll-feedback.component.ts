import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from 'src/app/Services/feedback.service';
import { FeedBack } from 'src/app/entity/FeedBack';

@Component({
  selector: 'app-coll-feedback',
  templateUrl: './coll-feedback.component.html',
  styleUrls: ['./coll-feedback.component.css']
})
export class CollFeedbackComponent {
  allFeedback: FeedBack[] = [];


  constructor(private feedbackService: FeedbackService,  private router: ActivatedRoute) { } // Inject the FeedbackService

  ngOnInit(): void {
    this.getFeedback(); // Call the function when the component initializes
  }

  getFeedback() {
    const id: any =   this.router.snapshot.paramMap.get('id');
  
    this.feedbackService.getFeedbackByCollocationBookingId(id).subscribe( {
      next: (feedback: FeedBack) => {
        //@ts-ignore
        this.allFeedback = feedback;
        console.log('Feedback:', feedback);
    },
    error: err => {
    console.log("🚀 ~ CollFeedbackComponent ~ getFeedback ~ err:", err)
 
    }
  
    });
  }
 
}
