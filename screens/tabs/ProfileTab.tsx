import { Button, VStack, Center, Heading } from 'native-base'
import DarkModeToggle from '../../components/DarkModeToggle'

export default function ProfileTab({ navigation }: any) {
    return (
    <Center w="100%" h="100%" _dark={{ bg: "black.200" }} _light={{ bg: "blueGray.200" }}>
      <VStack safeArea p="2" w="85%" py="8" space="2">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Welcome to your profile
        </Heading>
        <Heading mt="10" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Toggle to change color theme
        </Heading>
        <DarkModeToggle />
        </VStack>
    </Center>
    )
}