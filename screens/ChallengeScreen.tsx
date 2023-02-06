import { Center, FlatList, Heading, View } from 'native-base'
import DayIcon from '../components/DayIcon'

const days = [ { order: 1 }, { order: 2 }, { order: 3 }, { order: 4 }, { order: 5 }, { order: 6 },
    { order: 7 }, { order: 8 }, { order: 9 }, { order: 10 }, { order: 11 }, { order: 12 }, { order: 13 }, { order: 14 }, { order: 15 }, { order: 16 }, { order: 17 }, { order: 18 }, { order: 19 }, { order: 20 }, { order: 21 }, { order: 22 }, { order: 23 }, { order: 24 }, { order: 25 }, { order: 26 }, { order: 27 }, { order: 28 }, { order: 29 }, { order: 30 }]

export default function ChallengeScreen({ navigation }: any ) {
    return (
        <View h="100%">
            <Heading>Challenge</Heading>
            <Center>
                <FlatList
                    data={days}
                    renderItem={({ item }) => <DayIcon order={item.order} onPress={() => navigation.navigate('Day')} />}
                    numColumns={7}
                    keyExtractor={item => item.order.toString()}
                />
            </Center>
        </View>
    )
}