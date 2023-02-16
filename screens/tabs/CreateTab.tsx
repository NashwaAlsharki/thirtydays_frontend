import { View, Center, VStack, Box, Text, Heading, Divider, Pressable, FlatList, ScrollView } from 'native-base'
import React, { useState, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import ChallengeCard from '../../components/ChallengeCard'
import userId from '../../constants/User'

interface Props {
    navigation: any
}

export default function CreateTab({ navigation }: Props) {
    const [challenges, setChallenges] = useState<any[]>([])

    useEffect(() => { fetchUserChallenges(userId.userId).then(setChallenges)}, [])

    let showChallenges = <Text textAlign="center">You haven't created any challenges yet</Text>
    if (challenges.length > 0) {
        showChallenges = <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList 
            showsVerticalScrollIndicator={false}
            data={challenges}
            renderItem={({ item }: any) => (
                <ChallengeCard
                    key = {item.id}
                    title={item.title}
                    duration={item.duration}
                    image = {item.image_url}
                    onPress={() => navigation.navigate('Challenge', { challenge: item })}
                />
            )}
        />
        </ScrollView>
    }

    useFocusEffect(
        React.useCallback(() => {
            fetchUserChallenges(userId.userId).then((data) => {
            setChallenges(data)
          })
        }, [])
      )

    return (
        <View w="100%">
            <Center>
            <Box p="8" m="10" borderWidth="1" borderColor="coolGray.100" backgroundColor="cyan.700">
                <Pressable onPress={() => navigation.navigate('CreateChallenge')}>
                    <VStack space="2" alignItems="center">
                        <Heading textAlign="center" size="sm" mb="3">Create Your Own Challenge</Heading>
                        <Text textAlign="center">TAP TO START</Text>
                    </VStack>
                </Pressable>
            </Box>
            <Divider mb="8"/>
            <Heading mb="3">Your Challenges</Heading>
            <Box w="85%">
                {showChallenges}
            </Box>
            </Center>
        </View>
    )
}

const fetchUserChallenges = async (userId: string) => {
    const response = await fetch(`http://127.0.0.1:8000/users/${userId}/created_challenges`)
    return response.json()
}


