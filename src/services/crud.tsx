import { instance } from "../axios/axios_instance"
import { TaskData } from "../types/task";

const create_operation = async(task_data: TaskData): Promise<Object> =>{
    const response = await instance.post('/todo_list', task_data);
    console.log(response);
    return response;
}

export {create_operation};