import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
  exports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule]
})
export class SharedModule {}
