import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private _http = inject(HttpClient);

  public listarUsuarios(): Observable<Usuario> {
    return this._http.get<Usuario>('');
  }

  public buscarUsuario(id: number): Observable<Usuario> {
    return this._http.get<Usuario>('');
  }

  public salvarUsuario(formulario: FormGroup | FormData): Observable<Usuario> {
    return this._http.post<Usuario>('', formulario);
  }

  public editarUsuario(formulario: FormGroup | FormData): Observable<Usuario> {
    return this._http.put<Usuario>('', formulario);
  }
}
