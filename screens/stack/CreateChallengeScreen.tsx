import { View, Center, VStack, HStack, Box, Heading, Button, Input, Checkbox, TextArea, Icon, FormControl } from 'native-base';
import UserId from '../../constants/User';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import axios from 'axios';

interface Challenge {
    title: string
    created_by: string
    description: string
    image_url: string
    categories: string[]
    days: Day[]
}

interface Day {
    number: number
    descriptioin: string
    exercises: []
}

interface Props {
    navigation: any
}

export default function CreateChallengeScreen( { navigation }: Props) {
    const [challenge, setChallenge] = useState<Challenge>({
        title: '',
        created_by: UserId.userId,
        description: '',
        image_url: '',
        categories: [],
        days: []
    })

    return (
        <View w="100%">
            <Center>
            <Box safeArea w="80%">
                <VStack space={2} mt={5}>
                    <Heading size="md" mb="2">Step 1: Add Challenge Details</Heading>
                    <FormControl>
                        <FormControl.Label>Title</FormControl.Label>
                        <Input size="lg" onChangeText={(text) => setChallenge({...challenge, title: text})} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Description</FormControl.Label>
                        <TextArea size="lg" onChangeText={(text) => setChallenge({...challenge, description: text})} />
                    </FormControl>
                    <FormControl.Label>Categories</FormControl.Label>
                    <HStack justifyContent="space-between">
                        <Checkbox.Group defaultValue={challenge.categories} onChange={(values) => setChallenge({...challenge, categories: values})}>
                            <VStack space="2">
                                <Checkbox value="Fitness">Fitness</Checkbox>
                                <Checkbox value="Wellness">Wellness</Checkbox>
                                <Checkbox value="DIY">DIY</Checkbox>
                                <Checkbox value="Food">Food</Checkbox>
                            </VStack>
                        </Checkbox.Group>
                        <Checkbox.Group defaultValue={challenge.categories} onChange={(values) => setChallenge({...challenge, categories: values})}>
                            <VStack space="2">
                                <Checkbox value="Skills">Skills</Checkbox>
                                <Checkbox value="Creativity">Creativity</Checkbox>
                                <Checkbox value="Other">Other</Checkbox>
                            </VStack>
                        </Checkbox.Group>
                    </HStack>
                    <FormControl>
                        <FormControl.Label>Image link</FormControl.Label>
                        <Input size="lg" onChangeText={(text) => setChallenge({...challenge, image_url: text})} />
                    </FormControl>
                    <HStack justifyContent="right">
                        <Button variant="outline" endIcon={<Icon as={Ionicons} name="chevron-forward-outline" />} mt="15px" w="120ox" onPress={() => postChallenge(challenge, navigation)}>SAVE</Button>
                    </HStack>
                </VStack>
            </Box>
            </Center>
        </View>
    )
}

// post challenge details to db
const postChallenge = async (challenge: Challenge, navigation: any) => {
    const response = await axios.post('http://127.0.0.1:8000/challenges', challenge)
    navigation.navigate('Create')
}