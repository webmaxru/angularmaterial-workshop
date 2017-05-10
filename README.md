# Step Actions

styles.css
```
Remove prebuilt
```

hero-theme.scss
```
"styles": [
        ...
        "hero-theme.scss"
      ]
```

hero-theme.scss
```
@import '~@angular/material/_theming';
@include mat-core();

$mat-hero-brown: (
  50: #795548,
  100: #795548,
  200: #795548,
  300: #795548,
  400: #795548,
  500: #795548,
  600: #795548,
  700: #795548,
  800: #795548,
  900: #795548,
  A100: #795548,
  A200: #795548,
  A400: #795548,
  A700: #795548,
  contrast: (
    50: white,
    100: white,
    200: white,
    300: white,
    400: white,
    500: white,
    600: white,
    700: white,
    800: white,
    900: white,
    A100: white,
    A200: white,
    A400: white,
    A700: white,
  )
);

$mat-hero-green: (
  50: #4CAF50,
  100: #4CAF50,
  200: #4CAF50,
  300: #4CAF50,
  400: #4CAF50,
  500: #4CAF50,
  600: #4CAF50,
  700: #4CAF50,
  800: #4CAF50,
  900: #4CAF50,
  A100: #4CAF50,
  A200: #4CAF50,
  A400: #4CAF50,
  A700: #4CAF50,
  contrast: (
    50: white,
    100: white,
    200: white,
    300: white,
    400: white,
    500: white,
    600: white,
    700: white,
    800: white,
    900: white,
    A100: white,
    A200: white,
    A400: white,
    A700: white,
  )
);

$mat-hero-red: (
  50: #E64A19,
  100: #E64A19,
  200: #E64A19,
  300: #E64A19,
  400: #E64A19,
  500: #E64A19,
  600: #E64A19,
  700: #E64A19,
  800: #E64A19,
  900: #E64A19,
  A100: #E64A19,
  A200: #E64A19,
  A400: #E64A19,
  A700: #E64A19,
  contrast: (
    50: white,
    100: white,
    200: white,
    300: white,
    400: white,
    500: white,
    600: white,
    700: white,
    800: white,
    900: white,
    A100: white,
    A200: white,
    A400: white,
    A700: white,
  )
);

$hero-primary: mat-palette($mat-hero-brown);
$hero-accent : mat-palette($mat-hero-green);
$hero-warn : mat-palette($mat-hero-red);

$hero-theme: mat-light-theme($hero-primary, $hero-accent, $hero-warn);

@include angular-material-theme($hero-theme);

.darkside-hero-theme {
    $dark-primary: mat-palette($mat-blue);
    $dark-accent: mat-palette($mat-purple);
    $dark-accent: mat-palette($mat-orange);

    $dark-theme: mat-dark-theme($dark-primary, $dark-accent, $dark-accent);

    @include angular-material-theme($dark-theme);
}

.baby-hero-theme {
    $dark-primary: mat-palette($mat-light-blue);
    $dark-accent: mat-palette($mat-yellow);
    $dark-warn: mat-palette($mat-red);

    $dark-theme: mat-light-theme($dark-primary, $dark-accent, $dark-accent);

    @include angular-material-theme($dark-theme);
}
```

app.component.html
```
<div ... [class]="activeTheme">

  <md-toolbar color="primary">
    ...
    <span fxFlex></span>

    <button md-icon-button [mdMenuTriggerFor]="themeMenu">
      <md-icon>more_vert</md-icon>
    </button>
  </md-toolbar>

  ...

  <md-menu #themeMenu x-position="before">
    <button md-menu-item (click)="activeTheme = ''">Regular Hero</button>
    <button md-menu-item (click)="activeTheme = 'darkside-hero-theme'">Darkside Hero</button>
    <button md-menu-item (click)="activeTheme = 'baby-hero-theme'">Baby Hero</button>
  </md-menu>

</div>
```

app.component.ts
```
  activeTheme = ''
```

custom-material.module.ts
```
MdMenuModule
```