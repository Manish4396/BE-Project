import {Routes,RouterModule  } from "@angular/router";

const appRoutes:Routes=[
    {path:'',loadChildren:'app/homemodule/homemodule#HomeModule'},
];
export const routing=RouterModule.forRoot(appRoutes);

