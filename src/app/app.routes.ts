import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        loadComponent: () => import('./view/root-route/about-route/about-main/about-main.component').then(c => c.AboutMainComponent)
    },
    { 
        path: 'languages', 
        loadComponent: () => import('./view/root-route/language-route/language-main/language-main.component').then(c => c.LanguageMainComponent)
    },
    { 
        path: 'projects', 
        loadComponent: () => import('./view/root-route/project-route/project-main/project-main.component').then(c => c.ProjectMainComponent)
    },
    { 
        path: '**', 
        loadComponent: () => import('./view/root-route/about-route/about-main/about-main.component').then(c => c.AboutMainComponent)
    },

];
