import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from "./cabecera/cabecera.component";
import { InicioComponent } from "./inicio/inicio.component";
import { BuscadorComponent } from "./buscador/buscador.component";
import { ProductosComponent } from "./productos/productos.component";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabeceraComponent, InicioComponent, BuscadorComponent, ProductosComponent, FooterComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IntangiblesMerch';
  
  filtroSeleccionado = { query: '', categoria: 'todos' };
  
    actualizarFiltro(nuevoFiltro: { query: string, categoria: string }) {
      this.filtroSeleccionado = nuevoFiltro;
    }
}