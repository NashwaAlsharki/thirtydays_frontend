import { Box, Text, Pressable, Heading, HStack, Image } from "native-base";

export default function ExcerciseCard(props: { title: string, reps: number, image: string, onPress: any }) {
    return (
    <Box alignItems="center" h="120px" mb="10px">
      <Pressable w="100%" h="100%" onPress={() => props.onPress()}>
        <HStack>
          <Image source={{ uri: props.image }} alt="image base" size="md" />
          <Heading>{props.title}</Heading>
          <Text>{props.reps}</Text>
        </HStack>
      </Pressable>
    </Box>
    )
  }