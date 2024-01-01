import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

function NavBar(){
    return(
    <Box bgColor={"#1f2937"} px={10} py={3}>
        <Link to={'/'}><Text fontSize={"lg"} fontWeight={"bold"} textColor={"white"}>Home</Text></Link>
    </Box>
    );
}

export default NavBar;