import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { background, primary } from './vars.styles';
import { useAuthStore } from './src/zustand/auth/auth';
import { AuthState } from './src/zustand/auth/auth.type';
import { authRoutes, nonAuthRoutes } from './src/routes/routes';
import { navigationRef } from './src/navigate';
import auth from '@react-native-firebase/auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './src/components/tab-bar/tab-bar';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const { user, setUser, setUserId } = useAuthStore<AuthState>((state) => state as AuthState);
  const onAuthStateChanged = (_user: any) => {
    setUser(_user);
    if (_user) {
      setUserId(_user.uid as string);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscriber();
  }, []);

  const routes = user ? authRoutes : nonAuthRoutes;

  console.log('user', JSON.stringify(user));

  return (
    <View style={styles.defaultPage}>
      <NavigationContainer ref={navigationRef}>
        <Tab.Navigator tabBar={(props: any) => <TabBar {...props} />}>
          {routes.map((route) => {
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
  bar: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: primary,
  },
  icon: {
    margin: 0,
  },
  hidden: {
    display: 'none',
  },
});

export default App;
