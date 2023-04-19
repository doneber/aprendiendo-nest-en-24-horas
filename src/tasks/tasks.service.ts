import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { TaskStatus } from './task.entity';
import { v4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  tasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Description 1',
      status: TaskStatus.TODO,
    },
    {
      id: '2',
      title: 'Task 2',
      description: 'Description 2',
      status: TaskStatus.IN_PROGRESS,
    },
  ];

  getAll(): Task[] {
    return this.tasks;
  }

  create(task: CreateTaskDto) {
    const newTask = this.taskRepository.create(task);
    this.taskRepository.save(newTask);
    return newTask;
  }

  delete(id: string) {
    const task = this.tasks.find((task) => task.id === id);
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return task;
  }

  update(id: string, taskUpdated: any): Task {
    let taskToUpdate = this.tasks.find((task) => task.id === id);
    taskToUpdate = { ...taskToUpdate, ...taskUpdated };
    this.tasks = this.tasks.map((task) =>
      task.id === id ? taskToUpdate : task,
    );
    return taskToUpdate;
  }
}
