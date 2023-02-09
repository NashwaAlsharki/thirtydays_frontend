import { IconButton, Heading } from 'native-base';

export default function DayIcon(props: { number: number, onPress: any }) {
    return (
        <IconButton 
            m="6px"
            h="35px" w="35px"
            variant="outline"
            icon={<Heading size="sm">{props.number}</Heading>}
            onPress={() => props.onPress()}
        />
    )
}