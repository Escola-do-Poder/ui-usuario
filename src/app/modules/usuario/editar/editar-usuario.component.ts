import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormularioUsuario } from '../formulario/formulario-usuario.component';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { DetalharUsuario } from '../detalhar/detalhar-usuario.component';

@Component({
  selector: 'app-editar-usuario',
  imports: [
    FormularioUsuario,
  ],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditarUsuario extends DetalharUsuario {
  private _router = inject(Router);

  public editarUsuario(formulario: FormGroup): void {
    this.usuarioService.editarUsuario(this.id(), formulario.getRawValue()).subscribe({
      complete: () => {
        this._router.navigate(['/usuarios']);
      },
    });
  }

}
