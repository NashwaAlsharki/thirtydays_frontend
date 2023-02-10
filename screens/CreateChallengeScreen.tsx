import { View, Text, VStack, Box, Heading, Button, Input, Checkbox, TextArea } from 'native-base';
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
        <View>
            <Box>
                <Heading>Challenge Details</Heading>
                <VStack space={2} mt={5}>
                    <Input placeholder="Title" />
                    <TextArea placeholder="Description" />
                    <Checkbox value="Fitness">Fitness</Checkbox>
                    <Checkbox value="Wellness">Wellness</Checkbox>
                    <Checkbox value="Creativity">Creativity</Checkbox>
                    <Checkbox value="Finances">Finances</Checkbox>
                    <Checkbox value="Food">Food</Checkbox>
                    <Checkbox value="Skills">Skills</Checkbox>
                    <Checkbox value="Sustainability">Sustainability</Checkbox>
                    <Checkbox value="DIY">DIY</Checkbox>
                    <Checkbox value="Spirituality">Spirituality</Checkbox>
                    <Checkbox value="Community">Community</Checkbox>
                    <Checkbox value="Relationships">Relationships</Checkbox>
                    <Checkbox value="Productivity">Productivity</Checkbox>
                    <Checkbox value="Travel">Travel</Checkbox>
                    <Checkbox value="Other">Other</Checkbox>
                    <Input placeholder="Image URL" />
                </VStack>
            </Box>
            <Button onPress={() => navigation.navigate('AddDay')}>Create Day</Button>
        </View>
    )
}