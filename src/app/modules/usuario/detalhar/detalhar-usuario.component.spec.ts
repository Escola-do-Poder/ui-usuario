import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharUsuario } from './detalhar-usuario.component';

describe('DetalharUsuario', () => {
  let component: DetalharUsuario;
  let fixture: ComponentFixture<DetalharUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalharUsuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalharUsuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
