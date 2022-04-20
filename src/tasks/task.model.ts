export interface Task {
    id: String,
    name: String,
    total: Number,
    status: statusTask
}

export enum statusTask {
    OPEN = 'OPEN',
    ON_PROGRESS = 'ON_PROGRESS',
    DONE = 'DONE'
}