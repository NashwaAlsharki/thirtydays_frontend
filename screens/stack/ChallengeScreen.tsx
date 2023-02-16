import { Center, FlatList, Text, View, Button, VStack, Heading } from 'native-base'
import { RouteProp } from '@react-navigation/native'
import DayIcon from '../../components/DayIcon'
import userId from '../../constants/User'
import axios from 'axios'


interface Challenge {
    _id: string
    original_id: string
    joiners: string[]
    title: string
    description: string
    days: Day[]
}

interface Day {
    number: number
    completed: boolean
}

interface Props {
    navigation: any
    route: RouteProp<any, 'Challenge'>;
}

export default function ChallengeScreen({ navigation, route }: Props ) {
    const { challenge } = route.params as { challenge: Challenge}
    console.log(challenge)

    let showButton = <Text></Text>

    if (challenge.joiners.includes(userId.userId)) {
        showButton =  <Text>You're doing this challenge</Text>
    } else if (challenge.original_id === "") {
        showButton = 
        <Button w="100%" mt="20px" 
        onPress={() => joinChallenge(challenge._id, userId.userId, navigation)}
        >JOIN CHALLENGE</Button>
    }

    return (
        <View h="100%">
            <Center justifyContent="center" mt="5">
                <VStack space={4} alignItems="center" mx="10">
                    <Heading>{challenge.title}</Heading>
                    <Text fontSize="md">{challenge.description}</Text>
                    <FlatList
                        numColumns={7}
                        data={challenge.days}
                        renderItem={({ item }) => (
                            <DayIcon
                                key={item.number}
                                number={item.number}
                                completed={item.completed}
                                onPress={() => navigation.navigate('Day', { day: item, challengeId: challenge._id })}
                            />
                        )}
                    />
                    {showButton}
                </VStack>
            </Center>
        </View>
    )
}

const joinChallenge = async (challengeId: string, userId: string, navigation: any) => {
    try {
        const response = await axios.patch(`http://127.0.0.1:8000/challenges/${challengeId}/join/${userId}`)
        alert ("You joined the challenge!")
        console.log(response.data)
        navigation.navigate('Plan')
    } catch (error) {
        console.log(error)
        return error
    }
}