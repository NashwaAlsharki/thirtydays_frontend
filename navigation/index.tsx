import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import PlanTab from '../screens/tabs/PlanTab';
import BrowseTab from '../screens/tabs/BrowseTab';
import ProfileTab from '../screens/tabs/ProfileTab';
import CreateTab from '../screens/tabs/CreateTab';

import ChallengeScreen from '../screens/stack/ChallengeScreen';
import DayScreen from '../screens/stack/DayScreen';
import CreateChallengeScreen from '../screens/stack/CreateChallengeScreen';
import AddDayScreen from '../screens/stack/AddDayScreen';
import StartScreen from '../screens/stack/StartScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

import DetailModal from '../screens/modals/DetailModal';
import FilterModal from '../screens/modals/FilterModal';
import SignupModal from '../screens/modals/SignupModal';
import LoginModal from '../screens/modals/LoginModal';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Challenge" component={ChallengeScreen} />
      <Stack.Screen name="Day" component={DayScreen} />
      <Stack.Screen name="CreateChallenge" component={CreateChallengeScreen} options={{ title: 'Create Challenge' }}/>
      <Stack.Screen name="AddDay" component={AddDayScreen} options={{ title: 'Add Day' }}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Filter" component={FilterModal} />
        <Stack.Screen name="Detail" component={DetailModal} />
        <Stack.Screen name="Login" component={LoginModal} />
        <Stack.Screen name="Signup" component={SignupModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();
function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Plan"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Plan"
        component={PlanTab}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Browse"
        component={BrowseTab}
        options={({ navigation }: RootTabScreenProps<'Browse'>) => ({
          title: 'Challenges',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Filter')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Feather
                name="filter"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Create"
        component={CreateTab}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="plus-square" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>['name'];
  color: string;
}) {
  return <Feather size={28} style={{ marginBottom: -3 }} {...props} />;
}
