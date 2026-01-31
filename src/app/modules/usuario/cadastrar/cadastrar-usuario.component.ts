import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormularioUsuario } from '../formulario/formulario-usuario.component';
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
  private _usuarioService = inject(UsuarioService);
  private _router = inject(Router);

  public salvarUsuario(formulario: FormGroup): void {
    this._usuarioService.salvarUsuario(formulario.getRawValue()).subscribe({
      complete: () => {
        this._router.navigate(['/usuarios']);
      },
    });
  }

}
