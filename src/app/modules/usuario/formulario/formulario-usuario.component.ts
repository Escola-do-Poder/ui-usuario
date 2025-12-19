import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ZardFormModule } from '@zard-ui/components/form/form.module';
import { ZardInputDirective } from '@zard-ui/components/input/input.directive';
import { ZardButtonComponent } from '@zard-ui/components/button/button.component';
import { UsuarioService } from '../services/usuario.service';
import { toast } from 'ngx-sonner';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

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
})
export class FormularioUsuario implements OnInit {
  public formulario!: FormGroup;

  private _formBuilder = inject(FormBuilder);
  private _usuarioService = inject(UsuarioService);
  private _router = inject(Router);

  public ngOnInit(): void {
    this.formulario = this._formBuilder.group({
      nome: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      cpf: [null, Validators.required],
      rg: [null, Validators.required],
    });
  }

  public onSubmit(): void {
    this._usuarioService.salvarUsuario(this.formulario.getRawValue()).subscribe({
      error: (err: HttpErrorResponse) => toast.error(
        'Ocorreu um problema!', {
          description: err.error.message,
        }),
      complete: () => {
        toast.success('Usuário salvo com sucesso!');
        this._router.navigate(['/']);
      },
    });
  }

}
