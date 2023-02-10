
import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Plan: {
            screens: {
              PlanTab: 'Plan',
            },
          },
          Browse: {
            screens: {
              BrowseTab: 'Browse',
              ChallengeScreen: 'Challenge',
              DayScreen: 'Day',
            },
          },
          Create: {
            screens: {
              CreateTab: 'Create',
              CreateChallengeScreen: 'CreateChallenge',
              AddDayScreen: 'AddDay',
            },
          },
          Profile: {
            screens: {
              ProfileTab: 'Profile',
            },
          },
    },
  },
      Filter: 'Filter',
      Detail: 'Detail',
      Signup: 'Signup',
      Login: 'Login',
      Start: 'Start',
      NotFound: '*',
    },
  },
};

export default linking;