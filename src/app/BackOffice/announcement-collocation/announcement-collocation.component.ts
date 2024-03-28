import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnnouncementCollocationService } from 'src/app/Services/announcement-collocation.service';
import { CollocationBookingService } from 'src/app/Services/collocation-booking.service';
import { FavorisService } from 'src/app/Services/favoris.service';
import { AnnouncementCollocation } from 'src/app/entity/AnnouncementCollocation';
import { CollocationBooking } from 'src/app/entity/CollocationBooking';

@Component({
  selector: 'app-announcement-collocation',
  templateUrl: './announcement-collocation.component.html',
  styleUrls: ['./announcement-collocation.component.css']
})
export class AnnouncementCollocationComponent {
  userId!: number;
  id!: any;
  loading : Boolean = false;

  announcement!: AnnouncementCollocation;
  progress: number = 0;
  progressWidth: number = 0;

  newCollocationBookingFormGroup!: FormGroup;
  announcementCollocation!: AnnouncementCollocation;
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed in milliseconds (1 second)
    arrows: true, // Show next/previous arrows
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
  };
  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gold star-hover text-center star'
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gold  star-hover text-center star'
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gold  star-hover text-center  star'
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gold  star-hover text-center star'
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gold  star-hover text-center star'
    }

  ];
  constructor(
    private collocationService: AnnouncementCollocationService,
    private favorisService: FavorisService,
    private router: ActivatedRoute,
    private route: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private collocationBookingService: CollocationBookingService,
   ) { }
  ngOnInit(): void {
    this.loadAnnouncement()
    this.initializeForm();

  }
  initializeForm(): void {
    this.newCollocationBookingFormGroup = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      telephone: ['', Validators.required],
      message: [''],
      statusType: ['ALREADY']
      // Ajoutez d'autres champs au besoin en fonction des propriétés de la réservation de colocation
    });
  }

  handleSaveCollocationBooking(): void {
    if (!this.id) {
      console.error('ID is missing.');
      this.toastr.error('User ID is missing.', "", {
        timeOut: 750,
      })
      return;
    }
    try {
      this.loading = true

      this.collocationService.getAnnouncementById(parseInt(this.id)).subscribe({
        next: (announcement: AnnouncementCollocation) => {
          if (!this.newCollocationBookingFormGroup.valid) {
            this.toastr.error('Le formulaire n\'est pas valide', "", {
              timeOut: 750,
            })
  
            // You may want to display an error message to the user
            return;
          }
  
          const collocationBooking: CollocationBooking = this.newCollocationBookingFormGroup.value as CollocationBooking;
          collocationBooking.annoncementCollocation = announcement;
  
          this.addCollocationBooking(collocationBooking, this.userId);
        },
        error: err => {
          this.toastr.error('Le formulaire n\'est pas valide', "", {
            timeOut: 750,
          })
        }
      });
    } catch (error) {
      this.loading = false
      
    }  
  
  }
  handelLoading(){
    this.loading = true

  }
  private addCollocationBooking(collocationBooking: CollocationBooking, userId: Number): void {

    this.collocationBookingService.addCollocationBooking(collocationBooking, userId).subscribe({
      next: () => {
        this.handleBookingSuccess();
      },
      error: err => {
        // console.error('Error adding collocation booking:', err);
        this.toastr.error('Error adding collocation booking:', "", {
          timeOut: 750,
        })
      }
    });
  }

  private handleBookingSuccess(): void {
    this.toastr.success("La réservation de colocation a été enregistrée avec succès!", "", {
      timeOut: 750,
    });
    this.route.navigateByUrl('/booColl');
  }
  loadAnnouncement() {
    this.id = this.router.snapshot.paramMap.get('id');

    this.userId = 4
    this.collocationService.getAnnouncementByIdAndUser(this.id, this.userId).subscribe((data) => {
      // @ts-ignore
      this.announcement = data;

    });
  }

}
