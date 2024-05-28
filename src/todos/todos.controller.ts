import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Redirect } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodo, Todo, UpdateTodo } from './todo.entity';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  index(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Post()
  @Redirect('/')
  create(@Body() data: CreateTodo): Promise<Todo> {
    return this.todosService.create(data);
  }

  @Get(':id')
  show(@Param('id', new ParseIntPipe()) id: number): Promise<Todo> {
    return this.todosService.findOne(id);
  }

  @Post(':id')
  @Redirect('/')
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() data: UpdateTodo,
  ): Promise<Todo> {
    return this.todosService.update(id, data);
  }

  @Delete(':id')
  @Redirect('/', 303)
  delete(@Param('id', new ParseIntPipe()) id: number): Promise<void> {
    return this.todosService.delete(id);
  }
}
