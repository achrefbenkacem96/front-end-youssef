import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { FooterComponent } from './BackOffice/footer/footer.component';
import { DynamicContentComponent } from './BackOffice/dynamic-content/dynamic-content.component';
import { NavbarComponent } from './BackOffice/navbar/navbar.component';
import { SidebarComponent } from './BackOffice/sidebar/sidebar.component';
import { HomeBackComponent } from './BackOffice/home-back/home-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { DynamicFrontComponent } from './FrontOffice/dynamic-front/dynamic-front.component';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import  {HttpClientModule} from "@angular/common/http";
import { FeedbackComponent } from './feedback/feedback.component';
import { AddCarpoolingComponent } from './BackOffice/add-carpooling/add-carpooling.component';
import { AnnouncementCollocationComponent } from './BackOffice/announcement-collocation/announcement-collocation.component';
import { CollocationBookingComponent } from './BackOffice/collocation-booking/collocation-booking.component';
import { AllanncollComponent } from './BackOffice/allanncoll/allanncoll.component';
import { AddanncollComponent } from './BackOffice/addanncoll/addanncoll.component';
import { AddBookingcollComponent } from './BackOffice/add-bookingcoll/add-bookingcoll.component';
import { AllBookingcollComponent } from './BackOffice/all-bookingcoll/all-bookingcoll.component';
import { FavorisComponent } from './BackOffice/favoris/favoris.component'; 
import { UpdateanncollComponent } from './BackOffice/addanncoll/updateanncoll.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MyanncollComponent } from './BackOffice/myanncoll/myanncoll.component';
import { AnncollbookingComponent } from './BackOffice/anncollbooking/anncollbooking.component';
import { AnncollarchiveComponent } from './BackOffice/anncollarchive/anncollarchive.component';
import { CollFeedbackComponent } from './BackOffice/coll-feedback/coll-feedback.component';
import {MatIconModule} from '@angular/material/icon';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    AllTemplateBackComponent,
    FooterComponent,
    DynamicContentComponent,
    NavbarComponent,
    SidebarComponent,
    HomeBackComponent,
    AllTemplateFrontComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    DynamicFrontComponent,
    HomeFrontComponent,
    FeedbackComponent,
    AddCarpoolingComponent,
    AnnouncementCollocationComponent,
    CollocationBookingComponent,
    AllanncollComponent,
    AddanncollComponent,
    AddBookingcollComponent,
    AllBookingcollComponent,
    FavorisComponent,
    UpdateanncollComponent,
    MyanncollComponent,
    AnncollbookingComponent,
    AnncollarchiveComponent,
    CollFeedbackComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    MatIconModule,
    SlickCarouselModule,
    MatProgressSpinnerModule
 
   ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
