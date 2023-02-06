import { Center, Box, VStack, FormControl, Input, Button} from "native-base";

export default function SignUpModal({ navigation }: any) {
    return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" py="8">
        <VStack space={3}>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input size="xl"/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" size="xl"/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" size="xl"/>
          </FormControl>
          <Button onPress={()=> navigation.navigate('Root')} mt="2">SIGN UP</Button>
        </VStack>
      </Box>
    </Center>
    );
}