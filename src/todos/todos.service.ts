import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTodo, Todo, UpdateTodo } from './todo.entity';
import { InjectRepository } from '@nestjs/typeorm';

export type TodoFilter = 'all' | 'completed' | 'active';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todosRepository.find();
  }

  findOne(id: number): Promise<Todo | null> {
    return this.todosRepository.findOneBy({ id });
  }

  create(data: CreateTodo): Promise<Todo> {
    const todo = this.todosRepository.create({ ...data, completed: false });
    return this.todosRepository.save(todo);
  }

  async update(id: number, data: UpdateTodo): Promise<Todo> {
    const todo = await this.todosRepository.findOneBy({ id });
    const newTodo: Todo = {
      ...todo,
      ...data,
    };
    return this.todosRepository.save(newTodo);
  }

  async delete(id: number): Promise<void> {
    await this.todosRepository.delete({ id });
  }

  async clearCompleted(): Promise<void> {
    await this.todosRepository.delete({ completed: true });
  }
}
