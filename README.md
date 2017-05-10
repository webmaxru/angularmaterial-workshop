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

# Getting Started

Super simple Angular app with 1 module and 2 routes 

## Get the Code
```
git clone https://github.com/johnpapa/angular-tour-of-heroes.git toh
cd toh
npm i
```

### Just in Time (JiT) Compilation

Runs the TypeScript compiler and launches the app

```
npm start
```

### Ahead of Time (AoT) Compilation 

Runs the Angular AoT compiler, rollup, uglify for an optimized bundle, then launches the app

```
npm run start-aot
```

### AoT + gzip 

Runs AoT plus gzips and launches the app 

```
gulp copy-aot-gzip
npm run aot
npm run rollup
http-server
```

Notes:
- Use your favorite server in place of `http-server`
- This could be scripted, obviously
- `lite-server` does not launch gzipped files by default.


