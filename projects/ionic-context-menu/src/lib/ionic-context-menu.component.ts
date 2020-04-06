import { Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { IonicContextMenuContentComponent } from './ionic-context-menu-content.component';

@Component({
  selector: 'ionic-context-menu',
  template: `
    <div>
      <ion-button (click)="present(template)">
        <ion-icon slot="end" [name]="icon || 'more'"></ion-icon>
      </ion-button>
      <ng-template #template>
        <div (click)="popover.dismiss()">
          <ng-content></ng-content>
        </div>
      </ng-template>
    </div>
  `,
  styles: []
})
export class IonicContextMenuComponent {
  popover: HTMLIonPopoverElement;
  @Input() icon: string;

  constructor(private popoverCtrl: PopoverController) { }

  async present(child) {
    this.popover = await this.popoverCtrl.create({
      component: IonicContextMenuContentComponent,
      componentProps: {
        template: child
      },
      event,
      translucent: true
    });
    return await this.popover.present();
  }

}
