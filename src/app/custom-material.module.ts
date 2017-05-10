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