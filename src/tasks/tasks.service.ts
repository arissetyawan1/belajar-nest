import { Injectable } from '@nestjs/common';
import { statusTask, Task } from './task.model';
import { v4 as uuid } from "uuid";
import { createTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = []

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string): Task {
        return this.tasks.find((task) => task.id === id)
    }

    createTask(createTaskDto: createTaskDto): Task {
        const { name, total } = createTaskDto
        const newTask: Task = {
            id: uuid(),
            name,
            total,
            status: statusTask.ON_PROGRESS
        }
        this.tasks.push(newTask);
        return newTask;
    }

    deleteTask(id: string): void {
        this.tasks = this.tasks.filter((index) => index.id !== id)

    }

    updateTask(id: string, status: statusTask): Task {
        const tasks = this.getTaskById(id);
        tasks.status = status
        return tasks;
    }
}
