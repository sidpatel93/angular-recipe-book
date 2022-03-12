import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shoppoingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private shoppoingListService: shoppoingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppoingListService.getIngredients();
    this.shoppoingListService.ingredientChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients
    })
  }

}
