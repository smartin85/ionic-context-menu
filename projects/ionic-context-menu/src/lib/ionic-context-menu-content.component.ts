import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'ionic-context-menu-content',
  template: `
  <ng-template #defaultTemplate>
    <div></div>
  </ng-template>
  <ng-container *ngTemplateOutlet="template ? template : defaultTemplate"></ng-container>
`
})
export class IonicContextMenuContentComponent {
  @Input() template: TemplateRef<any>;
}
