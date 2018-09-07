# ionic-context-menu
[![MIT License][license-image]][license-url] 
[![npm version][npm-image]][npm-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

A set of Angular-Components for context menus in Ionic V4 Apps.

## Installation
1. Install package from npm:
> npm install --save ionic-context-menu

2. Include `IonicContextMenuModule`into your application:
```typescript
import { NgModule } from '@angular/core';
//...
import { IonicContextMenuModule } from 'ionic-context-menu';


@NgModule({
  // ...
  imports: [
    IonicContextMenuModule
  ],
  // ...
})
export class HomePageModule {}

```

## Example

```html
<ion-header>
  <ion-toolbar>
    <ion-title>
      Ionic Blank
    </ion-title>
    <ion-buttons slot="end">
      <ionic-context-menu icon="more">
        <ionic-context-menu-item icon="home" (click)="action(1)">Item A</ionic-context-menu-item>
        <ionic-context-menu-item icon="star" (click)="action(2)">Item B</ionic-context-menu-item>
        <ionic-context-menu-item icon="cube" (click)="action(3)">Item C</ionic-context-menu-item>
        <ionic-context-menu-item icon="beer" (click)="action(4)">Item D</ionic-context-menu-item>
      </ionic-context-menu>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content padding>
  
</ion-content>

```

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-image]: https://badge.fury.io/js/ionic-context-menu.svg
[npm-url]: https://badge.fury.io/js/ionic-context-menu

[snyk-image]: https://snyk.io/test/github/smartin85/ionic-context-menu/badge.svg
[snyk-url]: https://snyk.io/test/github/smartin85/ionic-context-menu