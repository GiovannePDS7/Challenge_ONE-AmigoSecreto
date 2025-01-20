import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-inicial',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent {
  novoParticipante: string = '';
  participantes: string[] = [];
  spanLista: string = '';
  adicionarParticipante(): void {

    if(this.novoParticipante.trim() == ''){
      alert("Preencha o nome do participante");
    }
    else{
      if (this.novoParticipante.trim()) {
        this.participantes.push(this.novoParticipante.trim());
        this.novoParticipante = '';
        this.spanLista = 'Lista de participantes:'
  
        console.table(this.participantes)
      }
    }
  }
}
