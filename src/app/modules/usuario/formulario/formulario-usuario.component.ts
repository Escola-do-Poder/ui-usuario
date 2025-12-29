import { ChangeDetectionStrategy, Component, effect, inject, input, OnInit, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ZardFormModule } from '@zard-ui/components/form/form.module';
import { ZardInputDirective } from '@zard-ui/components/input/input.directive';
import { ZardButtonComponent } from '@zard-ui/components/button/button.component';
import { ModoFormulario } from '../../../core/types/modo-formulario.type';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-formulario-usuario',
  imports: [
    ReactiveFormsModule,
    ZardButtonComponent,
    ZardInputDirective,
    ZardFormModule,
  ],
  templateUrl: './formulario-usuario.component.html',
  styleUrl: './formulario-usuario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioUsuario implements OnInit {
  public modoFormulario = input.required<ModoFormulario>();
  public submeterFormulario = output<FormGroup>();
  public usuario = input<Usuario>();

  public formulario!: FormGroup;
  public carregando = input<boolean>(false);

  private _formBuilder = inject(FormBuilder);

  constructor() {
    this._criarFormulario();

    effect(() => {
      if (this.usuario()) {
        this._popularFormulario(this.usuario());
      }
    });
  }

  public ngOnInit(): void {
    if (this.modoFormulario() === 'detalhar') {
      this._desabilitarFormulario();
    }
  }

  public aoSubmeter(): void {
    this.submeterFormulario.emit(this.formulario);
  }

  private _criarFormulario(): void {
    this.formulario = this._formBuilder.group({
      nome: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      cpf: [null, Validators.required],
      rg: [null, Validators.required],
    });
  }

  private _desabilitarFormulario(): void {
    this.formulario.disable();
  }

  private _popularFormulario(usuario: Usuario | undefined): void {
    this.formulario.patchValue({ ...usuario });
  }

}
