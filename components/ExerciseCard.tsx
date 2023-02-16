import { Box, Text, Pressable, Heading, HStack, VStack, Image } from "native-base";

export default function ExerciseCard(props: { title: string, primer: string, image: string, onPress: any }) {
    return (
    <Box alignItems="center" h="80px" mb="10px" borderColor="gray.100" w="100%">
      <Pressable w="100%" h="100%" onPress={() => props.onPress()}>
        <HStack marginX="5px" justifyContent="left" space="4">
          <Image source={{ uri: props.image }} alt={ props.title } size="md" />
          <VStack space="2" justifyContent="center">
            <Heading size="sm">{props.title}</Heading>
            <Text>{props.primer}</Text>
          </VStack>
        </HStack>
      </Pressable>
    </Box>
    )
  }