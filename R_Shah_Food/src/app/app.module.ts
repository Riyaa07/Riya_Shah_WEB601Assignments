import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { CuisinePipe } from './cuisine.pipe';
import { HighLightImportantDataDirective } from './high-light-important-data.directive';
import { FoodListComponent } from './food-list/food-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { InvalidComponent } from './invalid/invalid.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    CuisinePipe,
    HighLightImportantDataDirective,
    FoodListComponent,
    ContentDetailComponent,
    InvalidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
