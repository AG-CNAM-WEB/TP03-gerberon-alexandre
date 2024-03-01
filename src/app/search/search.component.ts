// search.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchCriteria = new EventEmitter<any>();
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      year: [null],
      brand: [''],
      minPrice: [null],
      maxPrice: [null]
    });
  }

  search(): void {
    const criteria = this.searchForm.value;
    console.log('Search Criteria:', criteria);
    this.searchCriteria.emit(criteria);
  }  
}
