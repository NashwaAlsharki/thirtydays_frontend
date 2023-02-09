import ExcerciseCard from '../components/ExcerciseCard';
import { RouteProp } from '@react-navigation/native'
import { View, Text, FlatList } from 'native-base';
import { useState, useEffect } from 'react';
import axios from 'axios';


interface Day {
    _id: number
    exercises: Exercise[]
}

interface Exercise {
    _id: number
    title: string
    reps: number
    image_urls: string
}

interface Props {
    navigation: any
    route: RouteProp<any, 'Day'>
}

export default function DayScreen({ navigation, route }: Props) {
    const { day } = route.params as { day: Day }
    const [exercises, setExercises] = useState<Exercise[]>([])

    useEffect(() => {
        fetchExcercises(day).then(setExercises)}, [])

    return (
        <View>
            <Text>Day {day._id}</Text>
            <FlatList
                data={exercises}
                renderItem={({ item }) => (
                    <ExcerciseCard
                        key={item._id}
                        title={item.title}
                        reps={item.reps}
                        image={item.image_urls[0]}
                        onPress={() => navigation.navigate('Detail', { excercise: item })}
                    />
                )}
            />
        </View>
    )
}

// fetch excercises one by one from backend 
const fetchExcercises = async(day: Day): Promise<Exercise[]> => {
    let responses: any[] = []
    for (let i = 0; i < day.exercises.length; i++) {
        try {
            const response = await axios.get<Exercise[]>('http://127.0.0.1:8000/exercises/'+ day.exercises[i]._id)
            responses.push(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    return responses
}