import { View, Text, Heading, Button, VStack} from 'native-base'
import { ImageBackground } from 'react-native'

const image = {uri: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg'};

export default function StartScreen({ navigation }: any) {
    return (
        <View h="100%">
            <ImageBackground source={image} style={{ width: "100%", height: "100%" }} imageStyle={{ opacity: 1 }}>
                <VStack mt="10" space="2" alignItems="center">
                    <Heading fontSize="5xl">Thirty Days</Heading>
                    <Text fontSize="xl" textAlign="center">Stay motivated and achieve personal growth through short-term, achievable challenges</Text>
                    <Button w="60%" mt="4" onPress={() => navigation.navigate('Signup')}>SIGN UP</Button>
                    <Button w="60%" mt="2" onPress={() => navigation.navigate('Login')}>LOG IN</Button>
                </VStack>
            </ImageBackground>
        </View>
        )
}