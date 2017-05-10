import { NgModule } from '@angular/core';

import { MdToolbarModule, MdSidenavModule, MdIconModule, MdListModule, MdCardModule, MdButtonModule, MdInputModule, MdSelectModule, MdSnackBarModule } from '@angular/material';

@NgModule({
    imports: [
        MdToolbarModule,
        MdSidenavModule,
        MdIconModule,
        MdListModule,
        MdCardModule,
        MdButtonModule,
        MdInputModule,
        MdSelectModule,
        MdSnackBarModule
    ],
    exports: [
        MdToolbarModule,
        MdSidenavModule,
        MdIconModule,
        MdListModule,
        MdCardModule,
        MdButtonModule,
        MdInputModule,
        MdSelectModule,
        MdSnackBarModule
    ],
})
export class CustomMaterialModule { }