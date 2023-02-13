import { View, Center, VStack, Box, Text, Heading, Divider, Pressable } from 'native-base'

interface Props {
    navigation: any
}

export default function CreateTab({ navigation }: Props) {
    return (
        <View w="100%">
            <Center>
            <Box p="8" m="10" borderWidth="1" borderColor="coolGray.100">
                <Pressable onPress={() => navigation.navigate('CreateChallenge')}>
                    <VStack space="2" alignItems="center">
                        <Heading textAlign="center" size="sm" mb="3">Create Your Own Challenge</Heading>
                        <Text textAlign="center">TAP TO START</Text>
                    </VStack>
                </Pressable>
            </Box>
            <Divider mb="8"/>
            <Heading mb="3">Your Challenges</Heading>
            <Box>
                <Text textAlign="center">You haven't created any challenges yet</Text>
            </Box>
            </Center>
        </View>
    )
}
