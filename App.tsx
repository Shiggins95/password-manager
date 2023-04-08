import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { background } from './vars.styles';
import { useAuthStore } from './src/zustand/auth/auth';
import { AuthState } from './src/zustand/auth/auth.type';
import { tabRoutes } from './src/routes/routes';

const Tab = createMaterialBottomTabNavigator();

function App(): JSX.Element {
  const { user } = useAuthStore<AuthState>((state) => state as AuthState);
  // const accountIcon = ({ focused }: { focused: boolean }) => {
  //   return <AntDesign size={24} name="user" color={focused ? subtitle : primary} style={styles.icon} />;
  // };
  // const landingIcon = ({ focused }: { focused: boolean }) => {
  //   return <AntDesign size={24} name="user" color={focused ? subtitle : primary} style={styles.icon} />;
  // };
  useEffect(() => {
    console.log('user change', user);
  }, [user]);
  return (
    <View style={styles.defaultPage}>
      <NavigationContainer>
        <Tab.Navigator barStyle={[styles.bar, !user ? styles.hidden : null]}>
          {tabRoutes.map((route) => {
            return <Tab.Screen {...route} key={route.name} />;
          })}
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  defaultPage: {
    height: '100%',
    width: '100%',
    backgroundColor: background,
  },
  bar: { height: 50, justifyContent: 'center' },
  icon: {
    margin: 0,
  },
  hidden: {
    display: 'none',
  },
});

export default App;
