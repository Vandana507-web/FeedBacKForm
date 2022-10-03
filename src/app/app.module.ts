import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedbackformComponent } from './feedback/feedbackform/feedbackform.component';
import { PreviewComponent } from './feedback/preview/preview.component';
import { PersonalDetailsComponent } from './feedback/personal-details/personal-details.component';
import { QueOneComponent } from './feedback/que-one/que-one.component';
import { QueTwoComponent } from './feedback/que-two/que-two.component';
import { QueThreeComponent } from './feedback/que-three/que-three.component';
import { QueFourComponent } from './feedback/que-four/que-four.component';
import { QueFiveComponent } from './feedback/que-five/que-five.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackformComponent,
    PreviewComponent,
    PersonalDetailsComponent,
    QueOneComponent,
    QueTwoComponent,
    QueThreeComponent,
    QueFourComponent,
    QueFiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
