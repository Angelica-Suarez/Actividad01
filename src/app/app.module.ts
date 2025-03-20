import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardproductoComponent } from './components/cardproducto/cardproducto.component';
import { CardproductosComponent } from './components/cardproductos/cardproductos.component';
import { CardproductoTarjetaComponent } from './components/cardproducto-tarjeta/cardproducto-tarjeta.component';
import { CardbuscadorComponent } from './components/cardbuscador/cardbuscador.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    CardproductoComponent,
    CardproductosComponent,
    CardproductoTarjetaComponent,
    CardbuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
