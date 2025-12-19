import { Pipe, PipeTransform } from '@angular/core';

/**
 * Formata um CPF em padrão 000.000.000-00.
 * - Ignora caracteres não numéricos
 * - Formata progressivamente para comprimentos menores que 11
 */
@Pipe({ name: 'cpf' })
export class CpfPipe implements PipeTransform {
  transform(value: string | number | null | undefined): string {
    if (value === null || value === undefined) return '';

    const digits = String(value).replace(/\D+/g, '');
    if (!digits) return '';

    const len = Math.min(digits.length, 11);
    const v = digits.slice(0, len);

    const p1 = v.slice(0, Math.min(3, len));
    const p2 = len > 3 ? v.slice(3, Math.min(6, len)) : '';
    const p3 = len > 6 ? v.slice(6, Math.min(9, len)) : '';
    const p4 = len > 9 ? v.slice(9, len) : '';

    let out = p1;
    if (p2) out += `.${p2}`;
    if (p3) out += `.${p3}`;
    if (p4) out += `-${p4}`;

    return out;
  }
}
