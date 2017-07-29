import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: '主页'
    },
    children: [
      {path: 'dashboard',loadChildren: './dashboard/dashboard.module#DashboardModule'},
      { path: 'widgets',loadChildren: './widgets/widgets.module#WidgetsModule'}
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  }
];

export const routing: ModuleWithProviders =RouterModule.forChild(routes);
