import { compileNgModule } from '@angular/compiler';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({  
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: ``
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number = 0;
  @Input() total: any; // Assuming 'total' represents the total items count
  @Input() limit: any; // Assuming 'limit' represents the number of items per page
  @Input() totalPages: any; // Assuming 'totalPages' represents the number of pages
  @Output() changePage = new EventEmitter<number>();

  pages: number[] = []; // This will hold the page numbers

  ngOnInit(): void {
    const pagesCount = Math.ceil(this.limit / this.total); // Calculate the total number of pages
    this.pages = this.range(1, pagesCount); // Assign the calculated page numbers
    this.totalPages = pagesCount;
  }

  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map(el => el + start); // Adjusted to match Angular's zero-based indexing
  }
  
  // pageClicked(page: number){
  //   this.changePage.emit(page);
  // }

}

