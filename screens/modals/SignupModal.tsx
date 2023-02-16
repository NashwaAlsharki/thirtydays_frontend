import { Center, Box, VStack, FormControl, Input, Button} from "native-base";
import { useState } from 'react';
import axios from 'axios';

interface User {
  email: string
  password: string
}

interface Props {
  navigation: any
}

export default function SignUpModal( {navigation}: Props ) {
  const random = Math.floor(Math.random() * 10000)
  const [user, setUser] = useState<User>({email: "demo" + random + "@demo.com", password: "demo1234"})

  const signUp = async (): Promise<any> => {
    try {
      //const response = await axios.post('http://127.0.0.1:8000/users/signup', user)
      //console.log(response.data)
      navigation.navigate('Root', { screen: 'Profile' })

  } catch (error) { alert(error) }
  }

  return (
    <Center w="100%">
      <Box safeArea p="2" w="70%" py="8">
        <VStack space={3}>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input size="xl" onChangeText={(text) => setUser({...user, email: text})}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" size="xl" onChangeText={(text) => setUser({...user, password: text})}/>
          </FormControl>
          <Button mt="2" onPress={() => signUp()}
          >SIGN UP</Button>
          <Button variant="outline" onPress={() => signUp()}>DEMO SIGN UP</Button>
        </VStack>
      </Box>
      </Center>
    );
}
