import { View, Box, VStack, Center, Heading } from 'native-base';

export default function AddDayScreen() {
    return (
        <View w="100%">
            <Center>
            <Box safeArea w="80%">
                <VStack space={2} mt={5}>
                    <Heading size="md" mb="2">Step 1: Add Challenge Details</Heading>
                </VStack>
            </Box>
            </Center>
        </View>
    )
}
