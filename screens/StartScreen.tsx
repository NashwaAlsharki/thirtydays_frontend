import { View, Text, Heading, Button, VStack} from 'native-base'
import { ImageBackground } from 'react-native'

const image = {uri: 'https://images.pexels.com/photos/943747/pexels-photo-943747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'};

export default function StartScreen({ navigation }: any) {
    return (
        <View h="100%">
            <ImageBackground source={image} style={{ width: "100%", height: "100%" }}>
                <VStack mt="10" space="2" alignItems="center">
                    <Heading size="lg">DO THIRTY</Heading>
                    <Text textAlign="center">Stay motivated and achieve personal growth through short-term, achievable challenges</Text>
                    <Button w="60%" mt="4" onPress={() => navigation.navigate('Signup')}>SIGN UP</Button>
                    <Button w="60%" mt="2" onPress={() => navigation.navigate('Login')}>LOG IN</Button>
                </VStack>
            </ImageBackground>
        </View>
        )
}