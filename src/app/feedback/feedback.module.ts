import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { QueFiveComponent } from './que-five/que-five.component';
import { QueFourComponent } from './que-four/que-four.component';
import { QueOneComponent } from './que-one/que-one.component';
import { QueThreeComponent } from './que-three/que-three.component';
import { QueTwoComponent } from './que-two/que-two.component';
import { PreviewComponent } from './preview/preview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { MatModule } from '../mat.module';




@NgModule({
  declarations: [
    FeedbackformComponent,
    PersonalDetailsComponent,
    QueFiveComponent,
    QueFourComponent,
    QueOneComponent,
    QueThreeComponent,
    QueTwoComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatModule

  ]
})
export class FeedbackModule { }
