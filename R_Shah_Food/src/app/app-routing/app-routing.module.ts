import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent} from '../content-list/content-list.component';
import { ContentDetailComponent } from '../content-detail/content-detail.component';
import { FoodListComponent } from '../food-list/food-list.component';
import { InvalidComponent } from '../invalid/invalid.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/list",
    pathMatch: "full"
  },
  {
    path: "list",
    component: ContentListComponent,
  },
  {
    path: "detail/:id",
    component: ContentDetailComponent,
  },
  {
    path:"search",
    component: FoodListComponent,
  },
  {
    path: "**",
    component: InvalidComponent
  },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
