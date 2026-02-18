import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDemo } from './template-demo/template-demo';
import { CustomFormComponent} from './custom-form/custom-form';
import { ReactiveDemo } from './reactive-demo/reactive-demo';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateDemo, CustomFormComponent, ReactiveDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular_Forms');
}
