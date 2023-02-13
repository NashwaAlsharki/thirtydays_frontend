import { View, Text, Heading, Button, VStack} from 'native-base'
import { ImageBackground } from 'react-native'
import DarkModeToggle from '../../components/DarkModeToggle';

const image = {uri: 'https://images.pexels.com/photos/3772233/pexels-photo-3772233.jpeg'};

export default function StartScreen({ navigation }: any) {
    return (
        <View h="100%">
            <ImageBackground source={image} style={{ width: "100%", height: "100%" }}>
                <VStack mt="10" space="2" alignItems="center">
                    <Heading size="lg">DO THIRTY</Heading>
                    <Text textAlign="center">Stay motivated and achieve personal growth through short-term, achievable challenges</Text>
                    <Button w="60%" mt="4" onPress={() => navigation.navigate('Signup')}>SIGN UP</Button>
                    <Button w="60%" mt="2" onPress={() => navigation.navigate('Login')}>LOG IN</Button>
                    <DarkModeToggle />
                </VStack>
            </ImageBackground>
        </View>
        )
}