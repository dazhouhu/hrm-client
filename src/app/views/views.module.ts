import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './views.routing';

import { Pages } from './views.component';

@NgModule({
  imports: [CommonModule, routing],
  declarations: [Pages]
})
export class ViewsModule {
}
