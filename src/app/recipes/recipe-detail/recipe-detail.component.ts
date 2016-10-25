import { Component, OnInit , OnDestroy, Input } from '@angular/core';

import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";
import {RecipeService} from "../recipe.service";


@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'

})
export class RecipeDetailComponent implements OnInit, OnDestroy  {
  selectedRecipe: Recipe;
  private recipeIndex: number;
  private subscription: Subscription;

  constructor(private sls: ShoppingListService,
              private router: Router,
              private activateRouter: ActivatedRoute,
              private recipeService: RecipeService) {}

  ngOnInit(){
    this.subscription = this.activateRouter.params.subscribe(
      (param: any) => {
        this.recipeIndex = param['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
    );

  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipeIndex, 'edit'])
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes'])
  }

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
