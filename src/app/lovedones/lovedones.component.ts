import { Component } from '@angular/core';

@Component({
  selector: 'app-lovedones',
  templateUrl: './lovedones.component.html',
  styles: ``
})
export class LovedonesComponent {
  currentPage: number= 1;
  changePage(page: number): void{
    this.currentPage = page;
  }
  total = 2;
  data = [
    {
      name: 'Raul Lorejas',
      dateOfBirth: 'December 10',
      dateOfDeath: 'March 27, 2021',
      message: 'hello'
    },
    { 
      name: 'Maria Garcia',
      dateOfBirth: 'April 15',
      dateOfDeath: 'June 10, 2020',
      message: 'goodbye' 
    },
    { 
      name: 'John Smith', 
      dateOfBirth: 'July 23', 
      dateOfDeath: 'November 2, 2019', 
      message: 'rest in peace' 
    },
    { 
      name: 'Alice Johnson', 
      dateOfBirth: 'February 28', 
      dateOfDeath: 'August 19, 2021', 
      message: 'farewell' 
    },
    { 
      name: 'David Kim', 
      dateOfBirth: 'September 10', 
      dateOfDeath: 'December 5, 2022', 
      message: 'in loving memory' 
    },
    { 
      name: 'Laura Chen', 
      dateOfBirth: 'January 1', 
      dateOfDeath: 'March 3, 2021', 
      message: 'always remembered' 
    },
    { 
      name: 'Carlos Martinez', 
      dateOfBirth: 'June 30', 
      dateOfDeath: 'October 15, 2018', 
      message: 'gone but not forgotten' 
    },
    { 
      name: 'Emma Wilson', 
      dateOfBirth: 'November 11', 
      dateOfDeath: 'May 22, 2020', 
      message: 'missed dearly' 
    },
    { 
      name: 'Michael Brown', 
      dateOfBirth: 'March 3', 
      dateOfDeath: 'July 8, 2019', 
      message: 'forever in our hearts' 
    },
    { 
      name: 'Sophia Lee', 
      dateOfBirth: 'October 25', 
      dateOfDeath: 'April 17, 2021', 
      message: 'with love and memories' 
    }
  ]

  get paginatedData(){
    const start = (this.currentPage -1) * this.total;
    const end = start + this.total;

    return this.data.slice(start, end);
  }
}
