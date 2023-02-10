import { View, Text, Heading, Image, VStack } from 'native-base'
import { RouteProp } from '@react-navigation/native'
import {  useState, useEffect } from 'react'
import { Animated } from 'react-native'

interface Exercise {
    title: string
    primer: string
    primary: string
    secondary: string[]
    equipment: string[]
    image_urls: string[]
    steps: string[]
    tips: string[]
}

interface Props {
    route: RouteProp<any, 'Detail'>
}

export default function DetailModal({ route }: Props) {
    const { exercise } = route.params as { exercise: Exercise }
    return (
        <View>
            <VStack space={4} alignItems="center">
                {Animation(exercise.image_urls)}
                <Heading>{exercise.title}</Heading>
                <Text>{exercise.primer}</Text>
                <Text>{exercise.primary}</Text>
                <Text>{exercise.secondary}</Text>
                <Text>{exercise.equipment}</Text>
                <Text>{exercise.steps}</Text>
                <Text>{exercise.tips}</Text>
            </VStack>
        </View>
    )
}

const AnimatedImage = Animated.createAnimatedComponent(Image);

const Animation = (image_urls: string[]) => {
    if (image_urls.length === 0) {
         return <Image source={require('../../assets/images/not-available.png')} style={{width: 150, height: 150}} alt='not found' />
    }
    const images = image_urls.map((image_url) => ({ uri: image_url }));
    const [currentImage, setCurrentImage] = useState(0);
    const [fadeAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }
    , [fadeAnim]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((currentImage + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }
    , [currentImage]);

    return (
        <AnimatedImage
            source={images[currentImage]}
            style={{ width: "40%", height: "40%", opacity: fadeAnim }}
            alt = 'exercise'
        />
    );
};