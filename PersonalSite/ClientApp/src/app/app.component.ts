import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimatio} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'app';

  prepareRoute(outlet: RouterOutlet) {
 returoutlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
