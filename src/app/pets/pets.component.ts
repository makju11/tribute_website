import { Component } from '@angular/core';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styles: ``
})
export class PetsComponent {
  currentPage: number= 1;
  changePage(page: number): void{
    this.currentPage = page;
  }

}
