import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Producto } from '../interfaces/Producto';
import { ProductService } from '../services/playeras.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class ProductosComponent implements OnChanges {
  @Input() filtroSeleccionado!: { query: string, categoria: string };

  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  constructor(private productoService: ProductService) {}

  ngOnInit() {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
      this.filtrarProductos();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filtroSeleccionado'] && this.productos.length > 0) {
      this.filtrarProductos();
    }
  }

  filtrarProductos() {
    if (!this.filtroSeleccionado) return;
    const texto = this.filtroSeleccionado.query.toLowerCase();
    const categoria = this.filtroSeleccionado.categoria;

      console.log('Filtrando con:', texto, categoria); // <-- Agrega esto


    this.productosFiltrados = this.productos.filter(p => {
      const coincideTexto = p.nombre?.toLowerCase().includes(texto);
      const coincideCategoria =
        categoria === 'todos' ||
        (categoria === 'productos' && p.idCategoria === 1) ||
        (categoria === 'servicios' && p.idCategoria === 2);

      return coincideTexto && coincideCategoria;
    });
  }
}

