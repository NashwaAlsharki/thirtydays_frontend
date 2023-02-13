import { View, Center, Text, VStack, HStack, Box, Heading, Button, Input, Checkbox, TextArea } from 'native-base';
import { useState, useEffect } from 'react';

interface Challenge {
    title: string
    description: string
    created_by: string
    image_url: string
    categries: string[]
    days: []
}

export default function CreateChallengeScreen( { navigation }: any) {
    const categories = ['Fitness', 'Wellness', 'Creativity', 'Finances', 'Food', 'Skills', 'Sustainability', 'DIY', 'Spirituality', 'Community', 'Relationships', 'Productivity', 'Travel', 'Other']
    const [challenge, setChallenge] = useState<Challenge>({
        title: '',
        description: '',
        created_by: '',
        image_url: '',
        categries: [],
        days: []
    })

    return (
        <View w="100%">
            <Center>
            <Box safeArea w="80%">
                <VStack space={2} mt={5}>
                    <Input placeholder="Title" />
                    <TextArea placeholder="Description" />
                    <HStack justifyContent="space-between">
                        <VStack space="2">
                            <Checkbox value="Fitness">Fitness</Checkbox>
                            <Checkbox value="Wellness">Wellness</Checkbox>
                            <Checkbox value="DIY">DIY</Checkbox>
                            <Checkbox value="Food">Food</Checkbox>
                        </VStack>
                        <VStack space="2">
                            <Checkbox value="Skills">Skills</Checkbox>
                            <Checkbox value="Creativity">Creativity</Checkbox>
                            <Checkbox value="Other">Other</Checkbox>
                        </VStack>
                    </HStack>                    
                    <Input placeholder="Image URL" />
                    <Button onPress={() => navigation.navigate('AddDay')}>Create Day</Button>
                </VStack>

            </Box>
            </Center>
        </View>
    )
}