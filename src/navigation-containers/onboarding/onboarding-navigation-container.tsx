import React, { FC } from 'react';
import { onboardingRoutes } from './onboarding-routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

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
