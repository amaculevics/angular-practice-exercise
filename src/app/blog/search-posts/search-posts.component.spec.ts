import { TestBed } from '@angular/core/testing';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BlogActions } from '../store';

import { SearchPostsComponent } from './search-posts.component';

describe('SearchPostsComponent', () => {
  let component: SearchPostsComponent;
  let store: MockStore;
  let fb: FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore(),
        FormBuilder
      ]
    });

    store = TestBed.inject(MockStore);
    fb = TestBed.inject(FormBuilder);
    component = new SearchPostsComponent(fb, store);
  });

  it('init', () => {
    component.ngOnInit();
    expect(component.searchTerm).toBeInstanceOf(AbstractControl);
  });

  it('search', () => {
    const searchTerm = 'test';
    const spy = spyOn(store, 'dispatch');

    component.ngOnInit();
    component.searchTerm?.setValue(searchTerm);

    component.search();

    expect(spy).toHaveBeenCalledWith(BlogActions.search({ searchTerm }));
  });
});
