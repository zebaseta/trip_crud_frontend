import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b>Sebastian Zawrzykraj</b> in 2021
    </span>
  `,
})
export class FooterComponent {
}
