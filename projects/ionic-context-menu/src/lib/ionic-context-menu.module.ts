import { NgModule } from '@angular/core';
import { IonicContextMenuComponent } from './ionic-context-menu.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonicContextMenuContentComponent } from './ionic-context-menu-content.component';
import { IonicContextMenuItemComponent } from './ionic-context-menu-item.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [IonicContextMenuComponent, IonicContextMenuContentComponent, IonicContextMenuItemComponent],
  exports: [IonicContextMenuComponent, IonicContextMenuContentComponent, IonicContextMenuItemComponent],
  entryComponents: [IonicContextMenuComponent, IonicContextMenuContentComponent, IonicContextMenuItemComponent]
})
export class IonicContextMenuModule { }
