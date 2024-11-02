import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent {
  @Input() tarefa!: { tarefa: string; descricao: string; data:string; checkbox: boolean };
  @Output() delete = new EventEmitter<void>();
  @Output() conclusao = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }

  showDescription() {
    const descricaoElement = document.getElementById('descricao');
    if (descricaoElement) {
      if (descricaoElement.classList.contains('hidden')) {
        descricaoElement.classList.remove('hidden');
      } else {
        descricaoElement.classList.add('hidden');
      }
    }
  }

  toggleConclusao() {
    this.conclusao.emit();
  }
}
