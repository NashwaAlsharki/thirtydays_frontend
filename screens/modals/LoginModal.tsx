import { Center, Box, VStack, FormControl, Input, Link, Button } from "native-base";
import { useState } from 'react';
import axios from 'axios'

interface User {
  email: string
  password: string
}

interface Props {
  navigation: any
}

export default function LogInModal({ navigation}: Props ) {
  const [user, setUser] = useState<User>({ email: '', password: '' })
  return (
  <Center w="100%">
      <Box safeArea p="2" py="8" w="70%">
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input size="lg" onChangeText={(text) => setUser({...user, email: text})}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" size="lg" onChangeText={(text) => setUser({...user, password: text})}/>
          </FormControl>
          <Button mt="2" onPress={()=> logIn(user.email, user.password, navigation)} >LOG IN</Button>
          <Center>
            <Link>Forget Password?</Link>
          </Center>
        </VStack>
      </Box>
    </Center>
  )
}

const logIn = async (email: string, password: string, navigation: any): Promise<any> => {
  try {
      const response = await axios.post(
        'http://127.0.0.1:8000/users/login',
        { email: email, password: password }
      )
      const user = response.data
      navigation.navigate('Root', {user: user})
  } catch (error) {
      alert(error)
  }
}
