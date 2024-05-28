import { OmitType, PartialType, PickType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'todos' })
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @CreateDateColumn()
  createdAt: Date;
  @Column({
    nullable: true,
  })
  completed: boolean;
}

export class CreateTodo extends PickType(Todo, ['name']) {}

export class UpdateTodo extends PartialType(
  OmitType(Todo, ['id', 'createdAt']),
) {
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  completed?: boolean;
}
