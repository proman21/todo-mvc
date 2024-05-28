import { Controller, Delete, Get, Redirect, Render } from '@nestjs/common';
import { TodosService } from './todos/todos.service';

@Controller()
export class AppController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  @Render('index')
  async index() {
    const todos = await this.todosService.findAll();
    const totalIncomplete = todos.filter(({ completed }) => !completed).length;
    const showClearCompleted = todos.length !== totalIncomplete;
    return { todos, totalIncomplete, showClearCompleted };
  }

  @Delete('completed')
  @Redirect('/', 303)
  clearCompleted() {
    return this.todosService.clearCompleted();
  }
}
