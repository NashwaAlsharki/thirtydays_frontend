import { Center, FlatList, Text, View, Button } from 'native-base'
import { RouteProp } from '@react-navigation/native'
import DayIcon from '../../components/DayIcon'
import axios from 'axios'


interface Challenge {
    _id: string
    description: string
    days: Day[]
}

interface Day {
    _id: number
}

interface Props {
    navigation: any
    route: RouteProp<any, 'Challenge'>;
}

export default function ChallengeScreen({ navigation, route }: Props ) {
    const { challenge } = route.params as { challenge: Challenge}
    return (
        <View h="100%">
            <Text>{challenge.description}</Text>
            <Center>
                <FlatList
                    numColumns={7}
                    data={challenge.days}
                    renderItem={({ item }) => (
                        <DayIcon
                            key={item._id}
                            number={item._id}
                            onPress={() => navigation.navigate('Day', { day: item })}
                        />
                    )}
                />
            <Button>Join Challenge</Button>
            </Center>
        </View>
    )
}

const joinChallenge = async (challengeId: string, userId: string) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/challenges'+ challengeId + '/join/' + userId)
        alert ("You joined the challenge!")
        console.log(response.data)
    } catch (error) {
        console.log(error)
        return error
    }
}