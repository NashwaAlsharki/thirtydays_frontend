import { RootTabScreenProps } from '../../types';
import { View, FlatList } from 'native-base'
import ChallengeCard from '../../components/ChallengeCard'

const challenges = [
    {
        id: 1,
        title: 'Challenge 1',
        duration: 7,
        image: 'https://picsum.photos/200/300?grayscale&random=1'
    },
    {
        id: 2,
        title: 'Challenge 2',
        duration: 14,
        image: 'https://picsum.photos/200/300?random=2'
    },
    {
        id: 3,
        title: 'Challenge 3',
        duration: 21,
        image: 'https://picsum.photos/200/300?grayscale&random=3'
    },
    {
        id: 4,
        title: 'Challenge 4',
        duration: 21,
        image: 'https://picsum.photos/200/300?grayscale&random=4'
    },
    {
        id: 5,
        title: 'Challenge 5',
        duration: 21,
        image: 'https://picsum.photos/200/300?random=5'
    }
]

export default function BrowseTab({ navigation }: any) {
  return (
    <View h="100%">
    <FlatList w="90%" alignSelf="center" showsVerticalScrollIndicator={false}
        data={challenges}
        renderItem={({ item }) => (
            <ChallengeCard
                key={item.id}
                title={item.title}
                duration={item.duration}
                image={item.image}
                onPress={() => navigation.navigate('Challenge', { item: item })}
            />
        )}
    />
</View>
)
}
    
