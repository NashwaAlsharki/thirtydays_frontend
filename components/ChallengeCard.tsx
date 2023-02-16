import { Box, Text, Pressable, Heading, VStack } from "native-base";
import { ImageBackground } from "react-native";

export default function ChallengeCard(props: { title: string, duration: number, image: string, onPress: any }) {
    return (
    <Box alignItems="center" h="120px" mt="10px" borderColor="coolGray.900" borderWidth="1" rounded="lg">
      <Pressable w="100%" h="100%" onPress={() => props.onPress()}>
        <ImageBackground source={{ uri: props.image }} style={{ width: "100%", height: "100%" }} imageStyle={{ opacity: 0.5 }}>
          <VStack space="2" h="100%" justifyContent="center" ml="15px" mt="25px">
            <Heading size="lg">{props.title}</Heading>
            <Text size="xl">{props.duration} Day Challenge</Text>
          </VStack>
        </ImageBackground>
      </Pressable>
    </Box>
    )
  }