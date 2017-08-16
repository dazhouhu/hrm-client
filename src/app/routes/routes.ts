import { LayoutComponent } from '../layout/layout.component';
//import { TestComponent } from '../test/test.component';
export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
        ]
    },

    // Not found
    { path: '**', redirectTo: 'home' }

];
