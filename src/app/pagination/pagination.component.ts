import { compileNgModule } from '@angular/compiler';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({  
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: ``
})
export class PaginationComponent implements OnInit{
  @Input() currentPage: number = 1;
  @Input() total: number = 0;
  @Input() limit: number = 5;
  @Output() changePage = new EventEmitter<number>();

  pages: number[] = [];

  ngOnInit():  void {
    const pagesCount = Math.ceil(this.total / this.limit);
    this.pages = this.range(1, pagesCount);
    this.pages = Array.from({length: this.total}, (_, i)=> i + 1);
    console.log(this.pages);
  }

  range(start:number, end : number): number []{
    return [...Array(end).keys()].map(el =>  el + start);
  }

  pageClicked(page: number){
    this.changePage.emit(page);
  }

}
