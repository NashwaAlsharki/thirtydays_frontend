import { RouteProp } from '@react-navigation/native'
import { Center, FlatList, Text, View } from 'native-base'
import DayIcon from '../components/DayIcon'


interface Challenge {
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
            </Center>
        </View>
    )
}