import { View, Text } from 'native-base';
import { useState, useEffect } from 'react';

interface Challenge {
    _id: string,
    title: string,
    days: Day[]
}

interface Day {
    id: number,
    title: string,
    description: string,
    exercises: []
}

interface Exercise {
    _id: number,
    title: string,
    description: string,
    sets: number,
    reps: number,
    weight: number
}


interface Props {
    route: Challenge
}

export default function AddDayScreen() {
    return (
        <View>
            <Text>Create Day Screen</Text>
        </View>
    )
}