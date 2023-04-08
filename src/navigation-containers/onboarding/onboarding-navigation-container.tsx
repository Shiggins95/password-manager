import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { onboardingRoutes } from './onboarding-routes';

const Stack = createStackNavigator();

const OnboardingNavigationContainer: FC = () => {
  return (
    <Stack.Navigator>
      {onboardingRoutes.map((route) => {
        return <Stack.Screen {...route} key={route.name} />;
      })}
    </Stack.Navigator>
  );
};

export default OnboardingNavigationContainer;
