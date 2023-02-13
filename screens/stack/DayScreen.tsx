import ExcerciseCard from '../../components/ExcerciseCard';
import { RouteProp } from '@react-navigation/native'
import { View, Text, FlatList } from 'native-base';
import axios from 'axios';


interface Day {
    _id: number
    description: string
    exercises: Exercise[]
}

interface Exercise {
    _id: string
    title: string
    order: number
    reps: number
    img: string
}

interface Props {
    navigation: any
    route: RouteProp<any, 'Day'>
}

export default function DayScreen({ navigation, route }: Props) {
    const { day } = route.params as { day: Day }
    const exercises = day.exercises

    return (
        <View>
            <Text>{day.description}</Text>
            <FlatList
                data={exercises}
                renderItem={({ item }) => (
                    <ExcerciseCard
                        key={item._id}
                        title={item.title}
                        reps={item.reps}
                        image={item.img}
                        onPress = {() => {
                            fetchExcercise(item._id).then((data) => {
                                navigation.navigate('Detail', { exercise: data })
                            })
                        }}
                    />
                )}
            />
        </View>
    )
}

const fetchExcercise = async(_id: string) => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/exercises/'+_id)
        return response.data
    } catch (error) {
        console.log(error);
    }
}