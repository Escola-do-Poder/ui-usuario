import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarConteudoComponent } from './sidebar-conteudo.component';

describe('SidebarConteudoComponent', () => {
  let component: SidebarConteudoComponent;
  let fixture: ComponentFixture<SidebarConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarConteudoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarConteudoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
