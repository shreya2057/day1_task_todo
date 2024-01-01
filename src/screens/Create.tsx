import { 
    Flex, 
    Heading, 
    Box, 
    FormLabel,
    Input,
    FormControl,
    Button,
    Center } 
from "@chakra-ui/react";
// import { useForm } from "react-hook-form";
import NavBar from "../components/Navbar";

function CreateTodo(){
    // const {register, handleSubmit, formState:{errors, isSubmitting}} = useForm();
    return(
        <Flex width={"100vw"} h={"100vh"} direction={"column"}>
            <NavBar/>
            <Flex p={10} width={"100%"} h={"100%"} justify={"center"} align={"center"}> 
                <Box bgColor={"white"} px={12} py={10} h={"min-content"} borderWidth={"thin"} borderRadius={"md"} borderColor={"#cbd5e1"} shadow={"lg"}>
                    <Heading size={"lg"} textColor={"#1f2937"}>Create todo</Heading>
                    <form>
                        <FormControl marginY={5}>
                            <FormLabel htmlFor="task" textColor={"#1f2937"}>Task</FormLabel>
                            <Input width={400} id="task" placeholder="Enter your task" type="text"/>
                        </FormControl>
                        <FormControl marginY={5}>
                            <FormLabel htmlFor="task" textColor={"#1f2937"}>Task</FormLabel>
                            <Input width={400} id="task" placeholder="Enter your task" type="date"/>
                        </FormControl>
                        <Center marginTop={5}>
                            <Button bgColor={"#cbd5e1"} borderWidth={"thin"} borderColor={"#1f2937"}>Create Task</Button>
                        </Center>
                    </form>
                </Box> 
            </Flex>
        </Flex>
    );
}

export default CreateTodo;