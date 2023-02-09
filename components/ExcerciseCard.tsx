import { Box, Text, Pressable, Heading, HStack, VStack, Image } from "native-base";

export default function ExcerciseCard(props: { title: string, reps: number, image: string, onPress: any }) {
    return (
    <Box alignItems="center" h="80px" mb="10px" borderColor="gray.100">
      <Pressable w="100%" h="100%" onPress={() => props.onPress()}>
        <HStack marginX="15px" justifyContent="left" space="4">
          <Image source={{ uri: props.image }} alt="image base" size="md" />
          <VStack space="2" justifyContent="center">
            <Heading>{props.title}</Heading>
            <Text>{props.reps} reps</Text>
          </VStack>
        </HStack>
      </Pressable>
    </Box>
    )
  }