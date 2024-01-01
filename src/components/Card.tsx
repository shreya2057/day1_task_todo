import { Card, Text } from "@chakra-ui/react";

function TaskCard(pt: {taskName: string, date: Date}){
    const endDate = pt.date.toLocaleString();
    return(
        <Card width={300} rounded={"sm"} px={10} py={6}>
            <Text fontSize={"lg"} fontWeight={"bold"}>{pt.taskName}</Text>
            <Text marginTop={3}>{endDate}</Text>
        </Card>
    );
}

export default TaskCard;