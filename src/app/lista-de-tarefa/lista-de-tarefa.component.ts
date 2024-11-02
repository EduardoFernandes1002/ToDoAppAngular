import { Component, OnInit } from '@angular/core';
import { TarefaComponent } from '../tarefa/tarefa.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-de-tarefa',
  standalone: true,
  templateUrl: './lista-de-tarefa.component.html',
  styleUrls: ['./lista-de-tarefa.component.css'],
  imports: [CommonModule, TarefaComponent]
})
export class ListaDeTarefaComponent implements OnInit { // Implementa OnInit
  tarefas: { tarefa: string; descricao: string; data: string; checkbox: boolean }[] = [];

  ngOnInit() {
    this.carregarTarefas(); // Carrega as tarefas do local storage ao inicializar
  }

  adicionarTarefa(tarefa: string, descricao: string) {
    const tarefaTitulo = tarefa.trim();
    const tarefaDescricao = descricao.trim();
    const tarefaData = new Date().toLocaleString();
    if (tarefaTitulo && tarefaDescricao) {
      this.tarefas.push({ tarefa: tarefaTitulo, descricao: tarefaDescricao, data: tarefaData, checkbox: false });
      this.salvarTarefas(); // Salva as tarefas após adicionar
    }
  }

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
    this.salvarTarefas(); // Salva as tarefas após remover
  }

  toggleConclusao(index: number) {
    this.tarefas[index].checkbox = !this.tarefas[index].checkbox;
    this.salvarTarefas(); // Salva as tarefas após alternar o estado da checkbox
  }

  private salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
  }

  private carregarTarefas() {
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
      this.tarefas = JSON.parse(tarefasSalvas);
    }
  }
}
