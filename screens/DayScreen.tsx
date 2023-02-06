import { View, Text, FlatList } from 'native-base';
import ExcerciseCard from '../components/ExcerciseCard';

const excercises = [
    {
        id: 1,
        title: 'Excercise 1',
        reps: 7,
        image: 'https://picsum.photos/200/300?grayscale&random=1'
    },
    {
        id: 2,
        title: 'Excercise 2',
        reps: 14,
        image: 'https://picsum.photos/200/300?random=2'
    },
    {
        id: 3,
        title: 'Excercise 3',
        reps: 21,
        image: 'https://picsum.photos/200/300?grayscale&random=3'
    },
    {
        id: 4,
        title: 'Excercise 4',
        reps: 21,
        image: 'https://picsum.photos/200/300?grayscale&random=4'
    },
    {
        id: 5,
        title: 'Excercise 5',
        reps: 21,
        image: 'https://picsum.photos/200/300?random=5'
    }
]

export default function DayScreen({ navigate }: any) {
    return (
        <View>
            <Text>Day 6</Text>
            <FlatList
                data={excercises}
                renderItem={({ item }) => (
                    <ExcerciseCard
                        key={item.id}
                        title={item.title}
                        reps={item.reps}
                        image={item.image}
                        onPress={() => console.log(item.title)}
                    />
                )}
            />
        </View>
    )
}