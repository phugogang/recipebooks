import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";


import {RecipesComponent} from "./recipes.component";
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item.component";

import {recipesRouting} from "./recipes.routing";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeStartComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeDetailComponent
  ],
  imports: [ReactiveFormsModule, SharedModule, recipesRouting]
})

export class RecipeModule {}
