import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Render,
} from '@nestjs/common';
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
  @Render('todos/todo')
  async create(@Body() data: CreateTodo) {
    const todo = await this.todosService.create(data);
    return { todo };
  }

  @Get(':id')
  show(@Param('id', new ParseIntPipe()) id: number): Promise<Todo> {
    return this.todosService.findOne(id);
  }

  @Post(':id')
  @Render('todos/todo')
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() data: UpdateTodo,
  ) {
    const todo = await this.todosService.update(id, data);
    return { todo };
  }

  @Delete(':id')
  delete(@Param('id', new ParseIntPipe()) id: number): Promise<void> {
    return this.todosService.delete(id);
  }
}
