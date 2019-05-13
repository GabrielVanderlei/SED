import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  template: `<h4>Logged in: {{name}}!</h4>`,
  styles: [`h4 { font-family: Lato; }`]
})
export class HeaderComponent  {
  @Input() name: string;
}
