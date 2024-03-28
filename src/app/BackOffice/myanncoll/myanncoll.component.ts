import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AnnouncementCollocationService } from 'src/app/Services/announcement-collocation.service';
import { FavorisService } from 'src/app/Services/favoris.service';
import { AnnouncementCollocation } from 'src/app/entity/AnnouncementCollocation';

@Component({
  selector: 'app-myanncoll',
  templateUrl: './myanncoll.component.html',
  styleUrls: ['./myanncoll.component.css']
})
export class MyanncollComponent {
  total_page!: number ; // Array to store IDs of favorited announcements
  currentPage: number = 1;
  itemsPerPage: number = 3;
  newAnnouncementFormGroup!: FormGroup;
  allAnnouncements: AnnouncementCollocation[] = [];
  favoritedAnnouncements: number[] = []; // Array to store IDs of favorited announcements
  userId!: number ; // Array to store IDs of favorited announcements
  stars = [  {
      id: 1,
      icon: 'star',
      class: 'star-gold star-hover star'
    },  {
      id: 2,
      icon: 'star',
      class: 'star-gold  star-hover star'
    },  {
      id: 3,
      icon: 'star',
      class: 'star-gold  star-hover star'
    }, {
      id: 4,
      icon: 'star',
      class: 'star-gold  star-hover star'
    }, {
      id: 5,
      icon: 'star',
      class: 'star-gold  star-hover star'
    } ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed in milliseconds (1 second)
    arrows: true, // Show next/previous arrows
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
  };
  constructor(
    private collocationService: AnnouncementCollocationService,
    private favorisService: FavorisService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.userId = 4
    this.collocationService.getAnnouncementsByUserId(this.userId ).subscribe((data) => {
      // @ts-ignore
      this.allAnnouncements = data;
      console.log("🚀 ~ AllanncollComponent ~ this.collocationService.getAllAnnouncements ~ data:", data)
      this.total_page = Math.ceil( this.allAnnouncements.length / this.itemsPerPage);

      this.loadFavoritedAnnouncements(); // Load favorited announcements
    });
  }

  loadFavoritedAnnouncements() {
    const favorisStr: string | null = localStorage.getItem('favoris');
    if (favorisStr) {
      const favoris: AnnouncementCollocation[] = JSON.parse(favorisStr);
      this.favoritedAnnouncements = favoris.map(annonce => annonce.annoncementCollocationId);
    }
  }

  redirectToCreateAnnouncement() {
    this.route.navigate(['/addColl']);
  }

  handleDeleteAnnouncement(announcement: AnnouncementCollocation) {
    let conf = confirm("Are you sure?");
    if (!conf) return;

    this.collocationService.deleteAnnouncement(announcement.annoncementCollocationId).subscribe({
      next: (resp) => {
        const index = this.allAnnouncements.indexOf(announcement);
        if (index !== -1) {
          this.allAnnouncements.splice(index, 1);
        }
      },
      error: err => {
        console.log(err);
      }
    });
  }

  handleArchiveAnnouncement(announcement: AnnouncementCollocation) {
 
    const annId = announcement.annoncementCollocationId;
    if (announcement.archive) {
      this.collocationService.unarchiveAnnouncement(annId, this.userId).subscribe( {
        next: (resp) => {
          console.log(resp);
          this.collocationService.getAnnouncementsByUserId(this.userId ).subscribe((data) => {
            // @ts-ignore
            this.allAnnouncements = data;
            console.log("🚀 ~ AllanncollComponent ~ this.collocationService.getAllAnnouncementsByUserId ~ data:", data)
       
           });
        },
        error: err => {
          console.log(err);
        }
       });
    } else {
      this.collocationService.archiveAnnouncement(annId, this.userId).subscribe( {
        next: (resp) => {
          console.log(resp);
          this.collocationService.getAnnouncementsByUserId(this.userId ).subscribe((data) => {
            // @ts-ignore
            this.allAnnouncements = data;
            console.log("🚀 ~ AllanncollComponent ~ this.collocationService.getAllAnnouncementsByUserId ~ data:", data)
       
           });
        },
        error: err => {
          console.log(err);
        }
       });
    }
  }
  addFavoris(announcement: AnnouncementCollocation) {
 
    const annId = announcement.annoncementCollocationId;
   
      this.favorisService.addAnnoucementFavoris(this.userId, annId).subscribe( {
        next: (resp) => {
          console.log(resp);
          this.collocationService.getAnnouncementsByUserId(this.userId ).subscribe((data) => {
            // @ts-ignore
            this.allAnnouncements = data;
            console.log("🚀 ~ AllanncollComponent ~ this.collocationService.getAllAnnouncementsByUserId ~ data:", data)
       
           });
        },
        error: err => {
          console.log(err);
        }
       });
 
   
  }
  removeFavoris(announcement: AnnouncementCollocation) {
 
    const annId = announcement.annoncementCollocationId;
       // Remove from favoris
      this.favorisService.removeAnnouncementFromFavoris(this.userId, annId).subscribe( {
        next: (resp) => {
          console.log(resp);
          this.collocationService.getAnnouncementsByUserId(this.userId ).subscribe((data) => {
            // @ts-ignore
            this.allAnnouncements = data;
            console.log("🚀 ~ AllanncollComponent ~ this.collocationService.getAllAnnouncementsByUserId ~ data:", data)
       
           });
        },
        error: err => {
          console.log(err);
        }
       });
 
     
  
  }

  isAnnouncementFavorited(announcement: AnnouncementCollocation): boolean {
    return this.favoritedAnnouncements.includes(announcement.annoncementCollocationId);
  }
  redirectToUpdateAnnouncement(announcement: AnnouncementCollocation) {
    const id = announcement.annoncementCollocationId;
    // this.route.navigate(['/annColl']);
}
updateComponent(announcement: AnnouncementCollocation):boolean{
  const id = announcement.annoncementCollocationId;
  this.route.navigate(['/updateColl',id]);
  return false;
}
get totalPage(): number {
  return Math.ceil(this.allAnnouncements.length / this.itemsPerPage);
}

get pages(): number[] {
  const pagesArray = [];
  for (let i = 1; i <= this.totalPage; i++) {
    pagesArray.push(i);
  }
  return pagesArray;
}
}
