import { View, Text, Box, VStack, Input, FormControl, Icon, Select } from 'native-base'
import { Ionicons } from '@expo/vector-icons'

export default function FilterModal() {
    return (
        <View h="100%">
            <VStack space={4} alignItems="center">
                <Text fontSize="lg" fontWeight="bold">Filters</Text>
                <Box>
                <Input placeholder="Search by keyword" variant="filled" size="lg" borderRadius="10" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />}
                />
                </Box>
                <FormControl.Label>Category</FormControl.Label>
                <Select placeholder="Select category">
                    <Select.Item label="Fitness" value="strength" />
                    <Select.Item label="Wellness" value="cardio" />
                    <Select.Item label="Flexibility" value="flexibility" />
                </Select>
                <FormControl.Label>Duration</FormControl.Label>
            </VStack>
        </View>
    )
}