import { Component } from '@angular/core';
import { ListaDeTarefaComponent } from './lista-de-tarefa/lista-de-tarefa.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ListaDeTarefaComponent] // Importação standalone do `ListaDeTarefaComponent`
  // Importação standalone do `ListaDeTarefaComponent`
})
export class AppComponent {
  title = 'Minha Lista de Tarefas';
}


