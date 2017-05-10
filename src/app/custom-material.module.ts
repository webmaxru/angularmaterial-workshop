import { NgModule } from '@angular/core';

import { MdToolbarModule, MdSidenavModule, MdIconModule, MdListModule, MdCardModule, MdButtonModule, MdInputModule, MdSelectModule, MdSnackBarModule, MdMenuModule } from '@angular/material';

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
        MdSnackBarModule,
        MdMenuModule
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
        MdSnackBarModule,
        MdMenuModule
    ],
})
export class CustomMaterialModule { }