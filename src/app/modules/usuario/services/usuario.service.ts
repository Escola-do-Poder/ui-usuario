import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  // private _urlEndpoint = 'https://sabulous-nellie-matronal.ngrok-free.dev/usuarios';
  private _urlEndpoint = 'http://localhost:3000/usuarios';

  private _http = inject(HttpClient);

  public listarUsuarios(): Observable<Usuario[]> {
    return this._http.get<Usuario[]>(this._urlEndpoint, { headers: { 'ngrok-skip-browser-warning': '1' } });
  }

  public buscarUsuario(id: number): Observable<Usuario> {
    return this._http.get<Usuario>(this._urlEndpoint + `/${ id }`, { headers: { 'ngrok-skip-browser-warning': '1' } });
  }

  public salvarUsuario(formulario: FormGroup | FormData): Observable<Usuario> {
    return this._http.post<Usuario>(this._urlEndpoint, formulario, { headers: { 'ngrok-skip-browser-warning': '1' } });
  }

  public editarUsuario(id: number, formulario: FormGroup | FormData): Observable<Usuario> {
    return this._http.put<Usuario>(this._urlEndpoint + `/${ id }`, formulario, { headers: { 'ngrok-skip-browser-warning': '1' } });
  }

  public deletarUsuario(id: number): Observable<Usuario> {
    return this._http.delete<Usuario>(this._urlEndpoint + `/${ id }`, { headers: { 'ngrok-skip-browser-warning': '1' } });
  }
}
