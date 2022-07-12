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
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    CuisinePipe,
    HighLightImportantDataDirective,
    FoodListComponent,
    ContentDetailComponent,
    InvalidComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
      delay: 1000,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
