import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormularioUsuario } from '../formulario/formulario-usuario.component';
import { toast } from 'ngx-sonner';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-usuario',
  imports: [
    FormularioUsuario,
  ],
  templateUrl: './cadastrar-usuario.component.html',
  styleUrl: './cadastrar-usuario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CadastrarUsuario {
  public carregando = false;

  private _usuarioService = inject(UsuarioService);
  private _router = inject(Router);

  public salvarUsuario(formulario: FormGroup): void {
    this.carregando = true;
    this._usuarioService.salvarUsuario(formulario.getRawValue()).subscribe({
      error: (err: HttpErrorResponse) => {
        this.carregando = false;
        toast.error(
          'Ocorreu um problema!', {
            description: err.error.message,
          });
      },
      complete: () => {
        this.carregando = false;
        toast.success('Usuário salvo com sucesso!');
        this._router.navigate(['/']);
      },
    });
  }

}
