import {Component, ViewContainerRef} from '@angular/core';
import { Auth }              from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.template.html',
  providers: [ Auth ]
})
export class AppComponent {
  title = 'app works!';

  //private viewContainerRef: ViewContainerRef;
  constructor(private auth: Auth) {}
  }
  /*public constructor(viewContainerRef:ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }*/




