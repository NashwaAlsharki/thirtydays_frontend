import { Input, Box, Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons'

export default function SearchBar() {
    return (
        <Box>
            <Input placeholder="Search" variant="filled" size="lg" borderRadius="10" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />}
             />
        </Box>
    )
}
