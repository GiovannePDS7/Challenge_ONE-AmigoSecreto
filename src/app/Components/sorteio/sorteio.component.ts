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

  toggleAmigoSecreto(): void {
    this.amigoVisivel = !this.amigoVisivel;
  }
  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.participantes = this.sharedService.getParticipantes();
    console.log(this.participantes);

    if (this.participantes.length == 0) {
      this.router.navigate(['/inicial']);
    }

    this.sortear();
  }

  sortear(): void {
    const participantesParaSorteio = this.participantes.filter((_, index) => 
      index !== this.indiceParticipante && !this.sorteados.includes(this.participantes[index])
    );

    if (participantesParaSorteio.length === 0) {
      alert('Todos os participantes já foram sorteados!');
      this.router.navigate(['/inicial']);
    }

    const indiceSorteado = Math.floor(Math.random() * participantesParaSorteio.length);
    this.sorteadoAtual = participantesParaSorteio[indiceSorteado];

    this.sorteados.push(this.sorteadoAtual);
  }

  proximoParticipante(): void {
    this.indiceParticipante = (this.indiceParticipante + 1) % this.participantes.length;
    this.sorteadoAtual = '';
  }
}