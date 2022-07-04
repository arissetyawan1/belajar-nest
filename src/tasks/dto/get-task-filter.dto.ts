import { statusTask } from "../task.model"

export class GetFilterDto {
    status?: statusTask;
    search?: string;
}