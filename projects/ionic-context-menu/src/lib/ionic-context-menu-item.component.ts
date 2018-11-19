import { Component, Input } from '@angular/core';

@Component({
  selector: 'ionic-context-menu-item',
  template: `
  <ion-item lines="none">
    <ion-icon [name]="icon" slot="start"></ion-icon>
    <ion-label>
      <ng-content></ng-content>
    </ion-label>
  </ion-item>
`
})
export class IonicContextMenuItemComponent {
  @Input() icon: string;
}
