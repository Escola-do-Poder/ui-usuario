import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal } from '@angular/core';
import { FormularioUsuario } from '../formulario/formulario-usuario.component';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-detalhar-usuario',
  imports: [
    FormularioUsuario,
  ],
  templateUrl: './detalhar-usuario.component.html',
  styleUrl: './detalhar-usuario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetalharUsuario implements OnInit {
  public usuario = signal<Usuario>({
    id: 0,
    nome: '',
    cpf: '',
    rg: '',
    senha: '',
    email: '',
  });
  protected id = input.required<number>();

  protected usuarioService = inject(UsuarioService);

  public ngOnInit(): void {
    this.usuarioService.buscarUsuario(this.id()).subscribe({
      next: (usuario) => {

      console.log(usuario)
        this.usuario.set(usuario);
      },
    });
  }

}
