import { 
    Flex, 
    Heading, 
    Box, 
    FormLabel,
    Input,
    FormErrorMessage,
    FormControl,
    Button,
    Center,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import NavBar from "../components/Navbar";
import { TaskData } from "../types/task";
import { create_operation } from "../services/crud";

function CreateTodo(){
    const {register, handleSubmit, formState:{errors}} = useForm<TaskData>(); //The form uses data which is of type TaskData

    // create_task -> function with type SubmitHandler<TaskData>
    //             -> parameter type will be TaskData
    // SubmitHandler -> generic type provided by react-hook-form to define 
    //                  signature function to handle form submission.
    const create_task:SubmitHandler<TaskData> = async(formData)=>{
        console.log(formData);
        const response = await create_operation(formData);
        console.log(response);
    }
    return(
        <Flex width={"100vw"} h={"100vh"} direction={"column"}>
            <NavBar/>
            <Flex p={10} width={"100%"} h={"100%"} justify={"center"} align={"center"}> 
                <Box bgColor={"white"} px={12} py={10} h={"min-content"} borderWidth={"thin"} borderRadius={"md"} borderColor={"#cbd5e1"} shadow={"lg"}>
                    <Heading size={"lg"} textColor={"#1f2937"}>Create todo</Heading>
                    <form onSubmit={handleSubmit(create_task)}>
                        <FormControl marginY={5} isInvalid={!!errors.taskName}>
                            <FormLabel htmlFor="task" textColor={"#1f2937"}>Task</FormLabel>
                            <Input 
                                width={400} 
                                id="task" 
                                placeholder="Enter your task" 
                                type="text"
                                {...register(
                                    "taskName", //Fieldname
                                    {
                                        required: "Task name cannot be empty"
                                    }
                                )}
                            />
                            <FormErrorMessage>
                                {/* ?. -> optional chaining operator
                                       -> provides a way to safely access 
                                          properties or call methods on an 
                                          object without causing an error if 
                                          the object is null or undefined 
                                */}
                                    {errors.taskName?.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl marginY={5} isInvalid={!!errors.date}>
                            <FormLabel htmlFor="task" textColor={"#1f2937"}>Task</FormLabel>
                            <Input 
                                width={400} 
                                id="task" 
                                placeholder="Enter your task" 
                                type="date"
                                {...register(
                                    "date",
                                    {
                                        required: "End date is required field"
                                    }
                                )}
                            />
                            <FormErrorMessage>
                                {errors.date?.message}
                            </FormErrorMessage>
                        </FormControl>
                        <Center marginTop={5}>
                            <Button type="submit" bgColor={"#cbd5e1"} borderWidth={"thin"} borderColor={"#1f2937"}>Create Task</Button>
                        </Center>
                    </form>
                </Box> 
            </Flex>
        </Flex>
    );
}

export default CreateTodo;