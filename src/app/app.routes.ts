import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProdutosComponent } from './produtos/produtos.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'produtos', component: ProdutosComponent},
    {path: 'clientes', component: ClientesComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
