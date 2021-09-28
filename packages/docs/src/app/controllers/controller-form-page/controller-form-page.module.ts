import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  DocExampleModule,
  DocMarkdownModule,
  DocPageModule,
  generateRoutes,
} from '@swimlane/ngx-doc';
import { ControllerFormComponent } from './controller-form.component';

@NgModule({
  declarations: [ControllerFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(generateRoutes(ControllerFormComponent)),
    DocPageModule,
    DocExampleModule,
    DocMarkdownModule,
  ],
})
export class ControllerFormPageModule {}