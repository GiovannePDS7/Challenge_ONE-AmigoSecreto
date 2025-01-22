import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../Service/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sorteio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css']
})
export class SorteioComponent implements OnInit {
  participantes: string[] = [];
  indiceParticipante: number = 0;
  sorteados: string[] = [];
  sorteadoAtual: string = '';
  amigoVisivel: boolean = false;
  exibirAmigo: string = 'Exibir amigo secreto';
  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.participantes = this.sharedService.getParticipantes();
    console.log(this.participantes);

    this.sortear();
  }

  // Método para exibir ou esconder o amigo secreto
  toggleAmigoSecreto(): void {
    this.amigoVisivel = !this.amigoVisivel;

    if (this.amigoVisivel) {
      this.exibirAmigo = 'Esconder amigo secreto';
    }
    else {
      this.exibirAmigo = 'Exibir amigo secreto';
    }
  }

  // Método para realizar o sorteio
  sortear(): void {
    // Cria um array de sorteio excluindo o participante da vez e os já sorteados
    const participantesParaSorteio = this.participantes.filter((_, index) =>
      index !== this.indiceParticipante && !this.sorteados.includes(this.participantes[index])
    );

    if (participantesParaSorteio.length === 0) {
      alert('Todos os participantes já foram sorteados!');
      this.router.navigate(['/inicial']);
    }

    // Sorteia um novo participante da lista filtrada
    const indiceSorteado = Math.floor(Math.random() * participantesParaSorteio.length);
    this.sorteadoAtual = participantesParaSorteio[indiceSorteado];

    // Adiciona o participante sorteado à lista de sorteados
    this.sorteados.push(this.sorteadoAtual);
  }

  // Método para avançar para o próximo participante
  proximoParticipante(): void {
    // Avança para o próximo participante, garantindo que o índice é circular
    this.indiceParticipante = (this.indiceParticipante + 1) % this.participantes.length;

    // Limpa o sorteio atual
    this.sorteadoAtual = '';
    this.amigoVisivel = false;
    this.sortear();
  }
}