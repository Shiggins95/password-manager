import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './tab-bar.style';
import { TabBarProps } from './tab-bar.type';
import { authRoutes } from '../../routes/routes';
import { background, secondary } from '../../../../encropass/vars.styles';
import Body from '../../library/body/body';
import { BodyType } from '../../library/body/body.type';
import { Path } from '../../routes/routes.type';
import Icon from '../../library/icon/icon';
import { useAuthStore } from '../../zustand/auth/auth';
import { AuthState } from '../../zustand/auth/auth.type';

const TabBar: FC<TabBarProps> = ({ state, navigation }) => {
  const { user } = useAuthStore((s) => s as AuthState);
  if (!user) {
    return null;
  }
  const icons: { [key: string]: (focused: boolean) => React.ReactNode } = {
    AccountDetailsJourney: (focused: boolean) => (
      <Icon provider="AntDesign" size={24} name="user" color={focused ? secondary : background} />
    ),
    PasswordsJourney: (focused: boolean) => (
      <Icon
        provider="AntDesign"
        size={24}
        name={focused ? 'unlock' : 'lock'}
        color={focused ? secondary : background}
      />
    ),
    GeneratorJourney: (focused: boolean) => (
      <Icon provider="Ionicons" size={24} name="ios-create-outline" color={focused ? secondary : background} />
    ),
  };
  const renderItem = (route: any, index: number) => {
    const isFocused = state.index === index;
    const correspondingRoute = authRoutes.find((r) => r.name === route.name);
    if (route.name === Path.OnboardingJourney) {
      return null;
    }
    console.log('current route', route.name);
    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        // The `merge: true` option makes sure that the params inside the tab screen are preserved
        navigation.navigate({ name: route.name, merge: true });
      }
    };

    return (
      <TouchableOpacity
        onPress={onPress}
        key={route.key}
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        testID={correspondingRoute?.testId}
        accessibilityLabel={correspondingRoute?.testId}
        style={styles.iconContainer}
      >
        {icons[route.name as string](isFocused)}
        <Body
          type={BodyType.Small}
          text={correspondingRoute?.label as string}
          color={isFocused ? secondary : background}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        return renderItem(route, index);
      })}
    </View>
  );
};

export default TabBar;
