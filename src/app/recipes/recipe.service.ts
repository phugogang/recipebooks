import {Injectable, EventEmitter} from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class RecipeService {
  recipeChanged = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Dv Nghia', 'This is description', 'http://i.imgur.com/NCVC4Jx.jpg', [
      new Ingredient('Red Color', 2),
      new Ingredient('Blue Color', 5)
    ]),
    new Recipe('Phu em', 'My description haha', 'http://www.w3schools.com/css/img_fjords.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ])
  ];

  constructor(private http: Http) { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id]
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipe-a3144.firebaseio.com/recipes.json', body, {headers: headers})
  }

  fetchData(){
    return this.http.get('https://recipe-a3144.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
            this.recipeChanged.emit(this.recipes)
        }
      );
  }



}
