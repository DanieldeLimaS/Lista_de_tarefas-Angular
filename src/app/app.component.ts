import { Component } from '@angular/core';
import { Todo } from 'src/Models/todo.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title:String = 'Minhas Tarefas';

  constructor() {
    this.todos.push(new Todo(1,'Fazer compras',false));
    this.todos.push(new Todo(2,'Cortar o cabelo',false));
    this.todos.push(new Todo(3,'Tirar o lixo',false));
    this.todos.push(new Todo(4,'lavar banheiro',false));
  }
  alteraTexto(){
    this.title='Teste';
  }
}
