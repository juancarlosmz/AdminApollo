import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

const routes: Routes = [
  { path: 'home', component: IndexComponent, children: [
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent },
      { path: '', component: LoginComponent},
      { path: '**', component: NopagefoundComponent},
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
