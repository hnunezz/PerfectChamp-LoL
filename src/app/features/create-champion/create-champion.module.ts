import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateChampionRoutingModule } from './create-champion-routing.module';
import { CreateChampionComponent } from './create-champion.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';


@NgModule({
  declarations: [CreateChampionComponent],
  imports: [
    CommonModule,
    CreateChampionRoutingModule,
    ButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CreateChampionModule { }
