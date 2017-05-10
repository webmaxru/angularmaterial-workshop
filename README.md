# Step Actions

Packages
```
npm install --save @angular/material
npm install --save @angular/flex-layout
npm install --save @angular/animations
npm install --save hammerjs
```

app.module.ts
```
import { BrowserAnimationsModule}  from '@angular/platform-browser/animations';
OR
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { MdToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

...

imports: [
    ...
    BrowserAnimationsModule,
    MdToolbarModule,
    FlexLayoutModule
   ],
```

app.component.ts
```
<md-toolbar color="primary">
    <span>{{title}}</span>
</md-toolbar>
```

styles.css
```
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
@import "https://fonts.googleapis.com/css?family=Material+Icons";
@import "https://fonts.googleapis.com/css?family=Roboto:400,300";

html, body {
  display: flex;
  flex-direction: column;

  font-family: Roboto, Arial, sans-serif;
  margin: 0;
  height: 100%;
}
```
