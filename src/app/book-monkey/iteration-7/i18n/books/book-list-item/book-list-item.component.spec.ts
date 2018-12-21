import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListItemComponent } from './book-list-item.component';
import { IsbnPipe } from '../shared/isbn.pipe';

@Component({
  selector: 'bm-book-list',
  template: '<bm-book-list-item [book]="b"></bm-book-list-item>'
})
class DummyHostComponent {
  b = {
    isbn: '111',
    title: 'Book 1',
    authors: [],
    published: new Date()
  };
}

describe('BookListItemComponent', () => {
  let testHost: DummyHostComponent;
  let fixture: ComponentFixture<DummyHostComponent>;
  let nativeEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DummyHostComponent,
        BookListItemComponent,
        IsbnPipe
      ]
    });
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DummyHostComponent);
    testHost = fixture.componentInstance;
    nativeEl  = fixture.nativeElement.querySelector('bm-book-list-item');
    fixture.detectChanges();
  }));

  it('should display the book input', () => {
    expect(nativeEl.textContent).toContain(testHost.b.isbn);
  });
});
