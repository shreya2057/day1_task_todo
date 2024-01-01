import { 
    Flex, 
    Heading, 
    Box, 
    Button
} from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import TaskCard from "../components/Card";
import { useEffect, useState } from "react";
import { read_operation } from "../services/crud";
import { APIResponse, ReadDataResponse } from "../types/types";
import { useNavigate } from "react-router-dom";

function Read(){
    const [data, setData] = useState<any>();
    const navigate = useNavigate();
    useEffect(()=>{
        const read_task = async()=>{
            const response: APIResponse|ReadDataResponse =  await read_operation();
            if("data" in response){
                setData(response.data);
            } 
        }
        read_task();
    },[])

    return(
        <Flex width={"100vw"} h={"100vh"} direction={"column"}>
            <NavBar/>         
            <Flex direction={"column"} p={10} width={"100%"} h={"100%"} align={"center"}> 
                <Heading size={"lg"} textColor={"#1f2937"}>Create todo</Heading>
                <Flex direction={"column"} justify={"end"} bgColor={"white"} px={12} py={10} h={"min-content"}>
                    {
                        data
                        &&
                        data.map((item:any, key: number)=><TaskCard taskName={item.taskName} date={item.date} key={key}/>)
                    }
                    <Box width={"100%"} display={"flex"} justifyContent={"end"}><Button marginY={5} onClick={()=>navigate('/create')}>Create Task</Button></Box>
                </Flex> 
            </Flex>
        </Flex>
    );
}

export default Read;