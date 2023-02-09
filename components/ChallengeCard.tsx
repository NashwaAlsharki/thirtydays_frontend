import { Box, Text, Pressable, Heading, VStack } from "native-base";
import { ImageBackground } from "react-native";

export default function ChallengeCard(props: { title: string, duration: number, joiners: number, image: string, onPress: any }) {
    return (
    <Box alignItems="center" h="120px" mb="15px">
      <Pressable w="100%" h="100%" onPress={() => props.onPress()}>
        <ImageBackground source={{ uri: props.image }} style={{ width: "100%", height: "100%"}}>
          <VStack space="2" h="100%" justifyContent="center" ml="15px">
            <Heading>{props.title}</Heading>
            <Text>{props.duration} Day Program</Text>
            <Text>{props.joiners} Participants</Text>
          </VStack>
        </ImageBackground>
      </Pressable>
    </Box>
    )
  }