import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAll() {
    return this.tasksService.getAll();
  }

  @Post()
  create(@Body() newTask: CreateTaskDto) {
    return this.tasksService.create(newTask);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() taskUpdated: UpdateTaskDto) {
    return this.tasksService.update(id, taskUpdated);
  }
}
