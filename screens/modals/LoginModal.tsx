import { Center, Box, VStack, FormControl, Input, Link, Button } from "native-base";

export default function LogInModal({ navigation}: any ) {
    return (
    <Center w="100%">
        <Box safeArea p="2" py="8" w="90%">
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input size="lg"/>
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" size="lg" />
            </FormControl>
            <Button mt="2" onPress={()=> navigation.navigate('Root')} >LOG IN</Button>
            <Center>
              <Link>Forget Password?</Link>
            </Center>
          </VStack>
        </Box>
      </Center>
    )
}