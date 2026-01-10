import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNavegacaoComponent } from './card-navegacao.component';

describe('CardsNavegacao', () => {
  let component: CardNavegacaoComponent;
  let fixture: ComponentFixture<CardNavegacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNavegacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNavegacaoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
