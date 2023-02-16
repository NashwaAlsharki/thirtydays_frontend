import DayExcerciseCard from '../../components/DayExcerciseCard';
import { RouteProp } from '@react-navigation/native'
import { View, Text, FlatList, VStack, Button, Center } from 'native-base';
import axios from 'axios';


interface Day {
    number: number
    description: string
    exercises: Exercise[]
    completed: boolean
}

interface Exercise {
    id: string
    title: string
    order: number
    reps: number
    image: string
}

interface Props {
    navigation: any
    route: RouteProp<any, 'Day'>
}

export default function DayScreen({ navigation, route }: Props) {
    const { day } = route.params as { day: Day }
    const exercises = day.exercises
    const { challengeId } = route.params as { challengeId: string }

    let buttonMessage = "MARK COMPLETED"
    if (day.completed === true) { buttonMessage = "DAY COMPLETED" }

    let content = <Text fontSize="lg" m="8">{day.description}</Text>
    if (exercises.length > 1) {
        content = <VStack space="4" alignItems="center">
        <Text fontSize="lg" mt="8">{day.description}</Text>            
        <FlatList 
            showsVerticalScrollIndicator={false}
            data={exercises}
            renderItem={({ item }) => (
                <DayExcerciseCard
                    key={item.id}
                    title={item.title}
                    reps={item.reps}
                    image={item.image}
                    onPress = {() => {
                        fetchExcercise(item.id).then((data) => {
                            navigation.navigate('Detail', { exercise: data })
                        })
                    }}
                />
            )}
        />
    </VStack>
    }

    return (
        <View h="100%">
            {content}
            <Center>
                <Button w="86%" my="3" onPress={() => toggleDayComplete(challengeId, day.number, navigation)}>{buttonMessage}</Button>
            </Center>
        </View>
    )
}

const fetchExcercise = async(id: string) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/exercises/${id}`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error);
    }
}

const toggleDayComplete = async(challenge_id: string, day_id: number, navigation: any) => {
    try {
        await axios.patch(`http://127.0.0.1:8000/challenges/${challenge_id}/days/${day_id}/toggle_complete`)
        navigation.navigate('Root', { screen: 'Plan' })
    } catch (error) {
        console.log(error);
    }
}