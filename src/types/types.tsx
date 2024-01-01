export interface TaskData{
    taskName: string,
    date: Date
}

export interface APIResponse{
    status: Number,
    message: string
}

export interface ReadDataResponse{
    status: Number,
    data: object
}