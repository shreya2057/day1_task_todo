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
    Alert,
    AlertIcon,
    useBreakpointValue
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import NavBar from "../components/Navbar";
import { TaskData, APIResponse } from "../types/types";
import { create_operation } from "../services/crud";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTodo(){
    const {register, handleSubmit, formState:{errors}} = useForm<TaskData>(); //The form uses data which is of type TaskData
    const [alertVisible, setVisible] = useState<Boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>("");
    const navigate = useNavigate();
    const textFieldWidth = useBreakpointValue({"sm": 200, "base": 300, "md":400});
    const textFieldPaddingHorizontal = useBreakpointValue({"sm":5, "base": 5, "md": 12})
    // create_task -> function with type SubmitHandler<TaskData>
    //             -> parameter type will be TaskData
    // SubmitHandler -> generic type provided by react-hook-form to define 
    //                  signature function to handle form submission.


    const create_task:SubmitHandler<TaskData> = async(formData)=>{
        const resonse: APIResponse = await create_operation(formData);
        if(resonse.status===201){
            setVisible(true);
            setAlertMessage(resonse.message);
            setTimeout(()=>{
                setVisible(false);
                setAlertMessage("");
                navigate('/');
            }, 2000);
        } else{
            setVisible(true);
            setAlertMessage(resonse.message);
            setTimeout(()=>{
                setVisible(false);
                setAlertMessage("");
            }, 2000);
        }
    }

    return(
        <Flex width={"100vw"} h={"100vh"} direction={"column"}>
            <NavBar/>
            {
                alertVisible 
                &&  
                <Alert status='success'>
                    <AlertIcon />
                    {alertMessage}
                </Alert>
            }
           
            <Flex p={10} width={"100%"} h={"100%"} justify={"center"} align={"center"}> 
                <Box bgColor={"white"} px={textFieldPaddingHorizontal} py={10} h={"min-content"} borderWidth={"thin"} borderRadius={"md"} borderColor={"#cbd5e1"} shadow={"lg"}>
                    <Heading size={"lg"} textColor={"#1f2937"}>Create todo</Heading>
                    <form onSubmit={handleSubmit(create_task)}>
                        <FormControl marginY={5} isInvalid={!!errors.taskName}>
                            <FormLabel htmlFor="task" textColor={"#1f2937"}>Task</FormLabel>
                            <Input 
                                width={textFieldWidth} 
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
                                width={textFieldWidth} 
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