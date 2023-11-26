import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
      },
      {
        path: 'make-report',
        loadChildren: () => import('./pages/make-report/make-report.module').then( m => m.MakeReportPageModule)
      },
      {
        path: 'history',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
          },
          {
            path: ':reportId',
            loadChildren: () => import('./pages/history-detail/history-detail.module').then( m => m.HistoryDetailPageModule)
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
