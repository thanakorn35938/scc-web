import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueqeComponent } from './queqe.component';

describe('QueqeComponent', () => {
  let component: QueqeComponent;
  let fixture: ComponentFixture<QueqeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueqeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueqeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
