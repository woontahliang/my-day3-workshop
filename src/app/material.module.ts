import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { NgModule } from '@angular/core';
const MATERIAL = [MatInputModule, MatRadioModule, MatButtonModule, MatToolbarModule, MatDatepickerModule, MatFormFieldModule, MatMomentDateModule, MatDividerModule, MatListModule];
@NgModule({
    imports: MATERIAL,
    exports: MATERIAL
})
export class MaterialModule { }