import { View, VStack, Box, Text, Heading, Divider, Pressable } from 'native-base'

interface Props {
    navigation: any
}

export default function CreateTab({ navigation }: Props) {
    return (
        <View>
            <Box>
                <Pressable onPress={() => navigation.navigate('CreateChallenge')}>
                    <VStack space="2" alignItems="center">
                        <Heading mb="3">Create Your Own Challenge</Heading>
                        <Text textAlign="center">TAP TO START</Text>
                    </VStack>
                </Pressable>
            </Box>
            <Divider />
            <Heading mb="3">Your Challenges</Heading>
            <Box>
                <Text textAlign="center">You haven't created any challenges yet</Text>
            </Box>
        </View>
    )
}
