import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { passwordsRoutes } from './passwords-routes';

const Stack = createNativeStackNavigator();

const OnboardingNavigationContainer: FC = () => {
  return (
    <Stack.Navigator>
      {passwordsRoutes.map((route) => {
        return <Stack.Screen {...route} key={route.name} />;
      })}
    </Stack.Navigator>
  );
};

export default OnboardingNavigationContainer;
