import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent {
  query: string = '';
  categoriaSeleccionada: string = 'todos';

  @Output() filtroCambiado = new EventEmitter<{ query: string, categoria: string }>();

  emitirFiltro() {
    this.filtroCambiado.emit({
      query: this.query,
      categoria: this.categoriaSeleccionada
    });
  }
  
}
