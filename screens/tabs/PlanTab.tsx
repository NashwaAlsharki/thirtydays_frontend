import { View, Text } from 'native-base'
import { RouteProp } from '@react-navigation/native'
import { RootTabParamList } from '../../types'

interface User {
  _id: string
  created_at: string
  password: string
  username: string
  email: string
  joined_challenges: string[]
  created_challenges: string[]
}

interface Props {
  navigation: any
  route: RouteProp<RootTabParamList, 'Plan'>
}

export default function PlanTab({ route }: Props) {
  const { user } = route.params as { user: User }
  console.log('user', user )
  console.log('route', route)
    return (
      <View>
        <Text>This is user</Text>
      </View>
   )
}
