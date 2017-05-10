# Step Actions

app.component.html
```
<div fxLayout="column" fxFlex>

  ...

  <md-sidenav-container fxFlex>

    ...

    <div class="content">

      ...

    </div>

  </md-sidenav-container>

</div>
```

app.component.css
```
:host {
  display: flex;
  flex: 1;
}

md-sidenav {
  width: 200px;
}

.content {
    padding: 16px;
}
```

custom-material.module.ts
```
MdInputModule, MdSelectModule, MdSnackBarModule
```

dashboard.component.html
```
<div fxLayout="row" fxLayout.xs="column" fxLayoutGap="16px">

  <md-card ... fxFlex="25">

  </md-card>

</div>
```

hero-detail.component.ts
```
import { MdSnackBar } from '@angular/material';
...
  selectedFood: string;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
...
constructor(
    ...
    public snackBar: MdSnackBar) {
  }
...
  save(): void {
...
          let snackBarRef = this.snackBar.open('Hero saved!', 'Back to list', {
            duration: 3000
          });

          snackBarRef.onAction().subscribe(() => {
            this.goBack(hero);
          });

  }
```

hero-search.component.html
```
<md-card>
  <md-card-content>
...
  </md-card-content>
</md-card>
```