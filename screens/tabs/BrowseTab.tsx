import ChallengeCard from '../../components/ChallengeCard'
import { useState, useEffect } from 'react'
import { View, FlatList } from 'native-base'
import axios from 'axios'

interface Challenge {
    id: number
    title: string
    duration: number
    image_url: string
}

interface Props {
    navigation: any
}

export default function BrowseTab({ navigation }: Props) {
    const [challenges, setChallenges] = useState<Challenge[]>([])
    
    useEffect(() => { fetchChallenges().then(setChallenges)}, [])
        
    return (
        <View h="100%" color="dark.600">
        <FlatList w="85%" alignSelf="center" showsVerticalScrollIndicator={false}
            data={challenges}
            renderItem={({ item }: any) => (
                <ChallengeCard
                    key = {item.id}
                    title={item.title}
                    duration={item.duration}
                    image = {item.image_url}
                    onPress={() => navigation.navigate('Challenge', { challenge: item })}
                />
            )}
        />
    </View>
    )
}
    
const fetchChallenges = async(): Promise<Challenge[]> => {
    try {
        const response = await axios.get<Challenge[]>('http://127.0.0.1:8000/challenges')
        return response.data
    } catch (error) {
        console.log(error);
        return []
    }
}