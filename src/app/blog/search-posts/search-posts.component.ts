import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BlogActions } from '../store';

@Component({
  selector: 'app-search-posts',
  templateUrl: './search-posts.component.html',
  styleUrls: ['./search-posts.component.css']
})
export class SearchPostsComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private store: Store) { }

  get searchTerm() { return this.searchForm.get('searchTerm') }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchTerm: this.fb.control('')
    });
  }

  search() {
    this.store.dispatch(BlogActions.search({ searchTerm: this.searchTerm?.value }));
  }

}
