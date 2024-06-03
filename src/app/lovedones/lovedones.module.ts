import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LovedonesComponent } from "./lovedones.component"
import { PaginationModule } from "../pagination/pagination.module";


@NgModule({
    imports: [CommonModule, PaginationModule],
    declarations: [LovedonesComponent],
    exports: [LovedonesComponent]
})
export class LovedonesModule{}
