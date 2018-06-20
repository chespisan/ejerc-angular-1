
// import modules router Angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import All Componentes
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { ZapatillaComponent } from './zapatillas/zapatillaz.component';
import { VideoJuegoComponent } from './videojuego/videojuego.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';


// Array conf Routes
const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent },
    {path: 'zapatillas', component: ZapatillaComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'videojuego', component: VideoJuegoComponent},
    {path: 'externo', component: ExternoComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', component: HomeComponent}
];

// export module
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
