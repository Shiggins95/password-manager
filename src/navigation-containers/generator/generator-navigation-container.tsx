import React, { FC } from 'react';
import { generatorRoutes } from './generator-routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const GeneratorNavigationContainer: FC = () => {
  return (
    <Stack.Navigator>
      {generatorRoutes.map((route) => {
        return <Stack.Screen {...route} key={route.name} />;
      })}
    </Stack.Navigator>
  );
};

export default GeneratorNavigationContainer;
