import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { createTaskDto } from './dto/create-task.dto';
import { GetFilterDto } from './dto/get-task-filter.dto';
import { statusTask, Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Get()
    getTasks(@Query() filterDto: GetFilterDto): Task[] {
        if (Object.keys(filterDto).length) {
            return this.tasksService.getTasksWithFilter(filterDto);
        } else {
            return this.tasksService.getAllTasks();
        }
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id)
    }

    @Post()
    createTask(@Body() createTaskDto: createTaskDto): Task {
        return this.tasksService.createTask(createTaskDto)
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): void {
        return this.tasksService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateTask(@Param('id') id: string, @Body('status') status: statusTask): Task {
        return this.tasksService.updateTask(id, status)
    }
}
