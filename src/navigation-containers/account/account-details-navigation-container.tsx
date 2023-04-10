import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { accountDetailsRoutes } from './account-details-routes';

const Stack = createNativeStackNavigator();

const AccountDetailsNavigationContainer: FC = () => {
  return (
    <Stack.Navigator>
      {accountDetailsRoutes.map((route) => {
        return <Stack.Screen {...route} key={route.name} />;
      })}
    </Stack.Navigator>
  );
};

export default AccountDetailsNavigationContainer;
