import { Box, Text, HStack, VStack, Image, Icon } from "native-base";
import { useState } from "react";

export default function MiniExcerciseCard(props: { title: string, reps: number, image: string }) {
    const [reps, setReps] = useState(props.reps)
    return (
    <Box alignItems="center" h="40px" w="40px" mb="10px" borderColor="gray.100">
        <VStack marginX="15px" justifyContent="left" space="4">
            <Image source={{ uri: props.image }} alt={ props.title } size="sm"/>
            <Text>{props.title}</Text>
            <HStack>
                <Icon name="plus" size="sm" color="coolGray.400" 
                onPress={() => setReps(reps + 1)} />
                <Text size="md" color="coolGray.400" >{props.reps} reps</Text>
                <Icon name="minus" size="sm" color="coolGray.400" 
                onPress={() => setReps(reps - 1)}
                />
            </HStack>
        </VStack>
    </Box>
    )
  }