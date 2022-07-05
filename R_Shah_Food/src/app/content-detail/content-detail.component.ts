import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Content } from '../models/content';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  id?: number;
  FoodItem?: Content;
 
 
  constructor(private router: Router,
    private route: ActivatedRoute,
    private FoodService: FoodService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +(params.get('id') ?? 0); // uses the + unary operator

      this.FoodService.getContentItem(this.id).subscribe(singleItem => {
        if (singleItem) {
          this.FoodItem = singleItem;
        }
        else {
          this.router.navigate(['/contentNotFound']);
        }
      });
    });
  }

}
