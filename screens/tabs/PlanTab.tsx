import { View, Text, Button } from 'native-base'

export default function PlanTab({ route, navigation }: any) {
    return (
        <View>
            <Text>Plan</Text>
            <Text>{route.name}</Text>
            <Button onPress={() => navigation.navigate('Browse')}>
                <Text>Browse</Text>
            </Button>
        </View>
    )
}