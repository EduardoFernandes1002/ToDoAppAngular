import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeTarefaComponent } from './lista-de-tarefa.component';

describe('ListaDeTarefaComponent', () => {
  let component: ListaDeTarefaComponent;
  let fixture: ComponentFixture<ListaDeTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDeTarefaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
