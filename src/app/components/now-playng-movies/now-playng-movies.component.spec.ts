import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlayngMoviesComponent } from './now-playng-movies.component';

describe('NowPlayngMoviesComponent', () => {
  let component: NowPlayngMoviesComponent;
  let fixture: ComponentFixture<NowPlayngMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NowPlayngMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NowPlayngMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
