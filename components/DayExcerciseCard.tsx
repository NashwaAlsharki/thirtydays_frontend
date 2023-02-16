import { Box, Text, Pressable, Heading, HStack, VStack, Image } from "native-base";

export default function DayExcerciseCard(props: { title: string, reps: number, image: string, onPress: any }) {
    return (
    <Box alignItems="center" h="120px" backgroundColor="gray.900" borderColor="gray.900" mt="3" mx="3">
      <Pressable w="100%" h="100%" onPress={() => props.onPress()}>
        <HStack mx="3" justifyContent="left" space="4" mt="3">
          <Image source={{ uri: props.image }} alt={ props.title } size="lg" />
          <VStack space="2" justifyContent="center">
            <Heading size="sm" flexWrap="wrap">{props.title}</Heading>
            <Text fontSize="md">{props.reps} reps</Text>
          </VStack>
        </HStack>
      </Pressable>
    </Box>
    )
  }