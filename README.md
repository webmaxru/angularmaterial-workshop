# Step Actions

custom-material.module.ts
```
import { NgModule } from '@angular/core';

import { MdToolbarModule, MdSidenavModule, MdIconModule, MdListModule, MdCardModule, MdButtonModule, MdInputModule } from '@angular/material';

@NgModule({
    imports: [
        MdToolbarModule,
        MdSidenavModule,
        MdIconModule,
        MdListModule,
        MdCardModule,
        MdButtonModule,
        MdInputModule
    ],
    exports: [
        MdToolbarModule,
        MdSidenavModule,
        MdIconModule,
        MdListModule,
        MdCardModule,
        MdButtonModule,
        MdInputModule
    ],
})
export class CustomMaterialModule { }
```

app.module.ts
```
import { CustomMaterialModule } from './custom-material.module';
...
@NgModule({
    imports: [
        CustomMaterialModule,
        ...
    ],
})
```

app.component.ts
```
templateUrl: './app.component.html',
```

app.component.html
```
<md-toolbar color="primary">
  <button md-icon-button (click)="mainSideNav.toggle()">
      <md-icon>menu</md-icon>
  </button>
  <span>{{title}}</span>

</md-toolbar>

<md-sidenav-container>
  <md-sidenav mode="side" opened #mainSideNav>

    <md-nav-list>
      <a md-list-item routerLink="/dashboard" routerLinkActive="active">
        <md-icon>info</md-icon>
        <span>Dashboard</span>
      </a>
      <a md-list-item routerLink="/heroes" routerLinkActive="active">
        <md-icon>info</md-icon>
        <span>Heroes</span>
      </a>
    </md-nav-list>

  </md-sidenav>
  <div>

    <router-outlet></router-outlet>

  </div>
</md-sidenav-container>
```

hero-search.component.html
```
<md-input-container>
  <input mdInput placeholder="Hero search" #searchBox (keyup)="search(searchBox.value)">
</md-input-container>

<md-nav-list>
  <a md-list-item *ngFor="let hero of heroes | async" (click)="gotoDetail(hero)">{{hero.name}}</a>
</md-nav-list>
```

dashboard.component.html
```
<my-hero-search></my-hero-search>

<h3>Top Heroes</h3>

<md-card *ngFor="let hero of heroes">
  <md-card-header>
    <md-icon md-card-avatar>flash_on</md-icon>
    <md-card-title>{{hero.name}}</md-card-title>
    <md-card-subtitle>#{{hero.id}}</md-card-subtitle>
  </md-card-header>
  <img md-card-image src="assets/img/hero.png">
  <md-card-content>
    <p>
      I am NOT Groot!
    </p>
  </md-card-content>
  <md-card-actions>
    <button md-raised-button (click)="gotoDetail(hero)">View</button>
  </md-card-actions>
</md-card>
```
