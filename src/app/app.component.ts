import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eShop Application';

  // Robbie, Why do we need this? Also, why it is always empty?
  processEnv = globalThis.process?.env;

  angularEnv = environment;
  
}
