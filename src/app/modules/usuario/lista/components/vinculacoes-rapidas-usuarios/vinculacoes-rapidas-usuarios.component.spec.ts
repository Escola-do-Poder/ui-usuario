import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacoesRapidasUsuariosComponent } from './vinculacoes-rapidas-usuarios.component';

describe('VinculacoesRapidasUsuariosComponent', () => {
  let component: VinculacoesRapidasUsuariosComponent;
  let fixture: ComponentFixture<VinculacoesRapidasUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VinculacoesRapidasUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinculacoesRapidasUsuariosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
