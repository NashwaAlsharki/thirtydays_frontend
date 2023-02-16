import { IconButton, Heading } from 'native-base';

export default function DayIcon(props: { number: number, onPress: any, completed: boolean }) {
    let variant = "outline"
    if (props.completed === true) {
        variant = "solid"
    }

    return (
        <IconButton 
            m="6px"
            h="35px" w="35px"
            variant={variant}
            icon={<Heading size="sm">{props.number}</Heading>}
            onPress={() => props.onPress()}
        />
    )
}