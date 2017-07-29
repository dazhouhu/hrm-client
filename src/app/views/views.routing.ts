import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

export const routes: Routes = [
  {
    path: 'login',
    component: SimpleLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/pages/login/login.module#LoginModule'
      }
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: { title: '主页' },
    children: [
      { path: 'dashboard',loadChildren: './dashboard/dashboard.module#DashboardModule'},
      { path: 'widgets',loadChildren: './widgets/widgets.module#WidgetsModule'}
    ]
  }
];

export const routing: ModuleWithProviders =RouterModule.forChild(routes);
