import { instance } from "../axios/axios_instance"
import { TaskData, APIResponse, ReadDataResponse } from "../types/types";

const create_operation = async(task_data: TaskData): Promise<APIResponse> =>{
    try{
        const result = await instance.post('/todo_list', task_data);
        const response: APIResponse = {status: result.status, message: "Task created"};
        return response;
    } catch(error: any){
        const response: APIResponse = {status: 404, message: error.message};
        return response;
    }
}

const read_operation = async(): Promise<ReadDataResponse | APIResponse>=>{
    try{
        const result = await instance.get('/todo_list');
        const response: ReadDataResponse = {status: result.status, data: result.data};
        return response;
    } catch(error: any){
        const response: APIResponse = {status: 404, message: error.message};
        return response;
    }
}

export {create_operation, read_operation};