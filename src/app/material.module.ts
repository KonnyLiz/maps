// modulo personalizado
// exclusivo para importaciones de angular material

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// imports Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  // exportamos los modulos que se ocuparan en mis componentes
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
