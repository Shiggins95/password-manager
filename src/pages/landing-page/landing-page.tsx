import React, { FC } from 'react';
import Page from '../../library/page/page';
import Headline from '../../library/headline/headline';
import { HeadlineType } from '../../library/headline/headline.type';
import { View } from 'react-native';
import { styles } from './landing-page.style';
import Button from '../../library/button/button';
import { ButtonType } from '../../library/button/button.type';
import { useAuthStore } from '../../zustand/auth/auth';
import { AuthState } from '../../zustand/auth/auth.type';

const LandingPage: FC = () => {
  console.log('Prevent collapse');

  // region define auth
  // endregion

  // region state variables
  const { user, setUser } = useAuthStore<AuthState>((state) => state as AuthState);
  // endregion

  // region define apis
  // endregion

  // region define httpOperationReducers
  // endregion

  // region methods
  const handleSignIn = () => {
    console.log('sign in');
    setUser(user ? '' : 'hello world');
  };
  const handleSignUp = () => {
    console.log('sign up');
  };
  // endregion

  // region useEffects
  // endregion

  return (
    <Page>
      <View style={styles.container}>
        <Headline type={HeadlineType.Title} text="Manage your passwords" />
        <View>
          <Button type={ButtonType.Primary} text="Sign in" onPress={handleSignIn} margin />
          <Button type={ButtonType.Tertiary} text="Sign up" onPress={handleSignUp} />
        </View>
      </View>
    </Page>
  );
};

export default LandingPage;
