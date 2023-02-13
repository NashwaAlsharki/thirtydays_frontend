import { View, Heading, Text } from 'native-base';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Challenge {
    title: string,
}

interface Day {
    number: number,
    exercises: []
}

interface Exercise {
    _id: number,
    image: string,
    title: string,
    reps: number,
}


interface Props {
    route: Challenge
}

export default function AddDayScreen() {
    const [exercises, setExercises] = useState<Exercise[]>([])
    const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([])
    const [muscle, setMuscle] = useState<string>('All')
    
    useEffect(() => { fetchExercises(muscle).then(setExercises) }, [muscle])

    return (
        <View>
            <Heading>Day 1</Heading>
        </View>
    )

}



const fetchExercises = async (muscle: string) => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/exercises?muscle=' + muscle)
        return response.data
    } catch (error) {
        console.log(error)
        return []
    }
}

