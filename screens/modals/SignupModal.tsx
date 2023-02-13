import { Center, Box, VStack, FormControl, Input, Button} from "native-base";
import { useState, useContext } from 'react';
import {  UserContext } from '../../UserContext';
import axios from 'axios'

interface User {
  email: string
  password: string
}

interface Props {
  navigation: any
}

export default function SignUpModal( {navigation}: Props ) {
  const [user, setUser] = useState<User>({email: '', password: ''})
  const { setUserId } = useContext(UserContext)

  const signUp = async (): Promise<any> => {
    try {
        const response = await axios.post(
          'http://127.0.0.1:8000/users/signup', 
          { email: user.email, password: user.password }
        )
        new Promise( res => setTimeout(res, 500));
        setUserId(response.data._id)    
        
        navigation.navigate('Root', { screen: 'Browse' })

    } catch (error) {
        alert(error)
    }
}

  const demoSignUp = async () => {
    const random = Math.floor(Math.random() * 10000)
    setUser({email: "demo" + random + "@demo.com", password: "demo1234"})
    signUp()
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
        <Button variant="outline" onPress={() => demoSignUp()}>DEMO SIGN UP</Button>
      </VStack>
    </Box>
    </Center>
    );
}