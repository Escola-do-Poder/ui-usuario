import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HttpLoadingService {
  public readonly loading = signal(false);
  private _requisicoesPendentes = 0;

  public iniciarLoading(): void {
    this._requisicoesPendentes += 1;
    if (!this.loading()) {
      this.loading.set(true);
    }
  }

  public finalizarLoading(): void {
    this._requisicoesPendentes = Math.max(0, this._requisicoesPendentes - 1);
    if (this._requisicoesPendentes === 0 && this.loading()) {
      this.loading.set(false);
    }
  }
}
