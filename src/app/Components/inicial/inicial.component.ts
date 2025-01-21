import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SharedService } from '../../Service/shared.service';

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

  constructor(private router: Router, private sharedService: SharedService) { }

  adicionarParticipante(): void {

    if (this.novoParticipante.trim() == '') {
      alert("Preencha o nome do participante");
    }
    else {
      if (this.novoParticipante.trim()) {
        this.participantes.push(this.novoParticipante.trim());
        this.novoParticipante = '';
        this.spanLista = 'Lista de participantes:'

        console.table(this.participantes)
      }
    }
  }

  IniciarSorteio(): void {
    if (this.participantes.length < 3) {
      alert('Insira ao menos três participantes');
      return;
    }
    this.sharedService.setParticipantes(this.participantes);  // Armazena no serviço
    this.router.navigate(['/sorteio']);  // Navega para a página de sorteio
  }
}