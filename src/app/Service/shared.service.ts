import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private participantes: string[] = [];

  setParticipantes(participantes: string[]): void {
    this.participantes = participantes;
  }

  getParticipantes(): string[] {
    return this.participantes;
  }
}
