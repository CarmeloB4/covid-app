import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

const materialModule = [
  MatToolbarModule
]

@NgModule({
  declarations: [],
  imports: [...materialModule],
  exports: [...materialModule]
})
export class MaterialModule { }
