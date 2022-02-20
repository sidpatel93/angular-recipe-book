import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Output() getRecipeDetail = new EventEmitter<void>();
  constructor() {  }

  ngOnInit(): void {
  }

  onRecipeItemClicked(){
    this.getRecipeDetail.emit()
  }

}
