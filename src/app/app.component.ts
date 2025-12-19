import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZardToastComponent } from '@zard-ui/components/toast/toast.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ZardToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('ui-usuario');
}
