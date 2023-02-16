import { View, Heading, FlatList, VStack, Text, Divider } from 'native-base'
import React, { useState, useEffect } from 'react'
import JoinedChallengeCard from '../../components/JoinedChallengeCard'
import { useFocusEffect } from '@react-navigation/native'
import userId from '../../constants/User'
import axios from 'axios'


interface Challenge {
  id: string
  title: string
  image_url: string
  completion_percent: number 
  duration: number 
}

interface Props {
  navigation: any
}

export default function PlanTab({ navigation }: Props) {
  const [joinedChallenges, setJoinedChallenges] = useState<Challenge[]>([])

  let showChallenges = 
  <Text mt="3">You haven't joined any challenges yet</Text>

  if (joinedChallenges.length > 0) {
    showChallenges = <FlatList
    showsVerticalScrollIndicator={false}
    data={joinedChallenges}
    renderItem={({ item }) => (
      <JoinedChallengeCard
        key={item.id}
        title={item.title}
        image_url={item.image_url}
        completion_percent={item.completion_percent}
        duration={item.duration}
        onPress={() => {
          navigation.navigate('Challenge', { challenge: item })
        }}
      />
    )}
  />
  }

  useEffect(() => {
    fetchJoinedChallenges(userId.userId).then((data) => {
      setJoinedChallenges(data)
    })
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      fetchJoinedChallenges(userId.userId).then((data) => {
        setJoinedChallenges(data)
      })
    }, [])
  )

    return (
      <View h="100%">
        <VStack mt="5" space="2" mx="7">
          <Heading size="md">Joined Challenges</Heading>
          <Divider mt="3" />
          {showChallenges}
        </VStack>
      </View>
   )
}

const fetchJoinedChallenges = async (userId: string) => {
  const response = await axios.get(`http://127.0.0.1:8000/users/${userId}/joined_challenges`)
  if (response.status === 200) {
    return response.data
  }
  return []
}