import { Component } from '@angular/core';
import { AnnouncementCollocation } from 'src/app/entity/AnnouncementCollocation';

@Component({
  selector: 'app-header-front',
  templateUrl: './header-front.component.html',
  styleUrls: ['./header-front.component.css']
})
export class HeaderFrontComponent {

  // addFavoris(announcement: AnnouncementCollocation) {
  //   const oldFavorisStr: string | null = localStorage.getItem('favoris');
  //   let oldFavoris: AnnouncementCollocation[] = oldFavorisStr ? JSON.parse(oldFavorisStr) : [];
  //   let cleanFavoris = oldFavoris?.filter(item => item?.annoncementCollocationId !== announcement?.annoncementCollocationId)

  //   localStorage.setItem('favoris', JSON.stringify(cleanFavoris));
  // }
}
