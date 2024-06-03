import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PetsComponent } from "./pets.component";
import { PaginationModule } from "../pagination/pagination.module";

@NgModule({
    imports: [CommonModule, PaginationModule],
    declarations: [PetsComponent],
    exports: [PetsComponent]
})
export class PetsModule{}
