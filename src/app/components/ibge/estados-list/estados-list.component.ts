import { Component } from '@angular/core';
import { Estados } from '../../../interfaces/Estatos';
import { IbgeService } from '../../../services/ibge.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../navbar/navbar.component';

@Component({
  selector: 'app-estados-list',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './estados-list.component.html',
  styleUrl: './estados-list.component.css'
})
export class EstadosListComponent {
  estados: Estados[] = [];

  constructor(private ibgeService: IbgeService) {
    this.list();
  }
  list(): void {
    //retorna uma lista de clientes do servidor e atribui à propriedade 'clientes'
     this.ibgeService.list().subscribe((list) => (this.estados = list));
  }
    //método para remover um cliente
  ngOnInit(): void {
    this.list();
  }
}
