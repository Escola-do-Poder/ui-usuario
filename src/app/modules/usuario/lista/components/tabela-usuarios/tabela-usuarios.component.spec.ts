import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaUsuariosComponent } from './tabela-usuarios.component';

describe('TabelaUsuariosComponent', () => {
  let component: TabelaUsuariosComponent;
  let fixture: ComponentFixture<TabelaUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaUsuariosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
