import React, { FC, useState } from 'react';
import { ScrollView } from 'react-native';
import Page from '../../library/page/page';
import Headline from '../../library/headline/headline';
import { HeadlineType } from '../../library/headline/headline.type';
import { styles } from './signin.style';
import InputField from '../../library/text-input/input-field';
import Button from '../../library/button/button';
import { ButtonType } from '../../library/button/button.type';
import { useAuthStore } from '../../zustand/auth/auth';
import { AuthState } from '../../zustand/auth/auth.type';
import { generateKey } from '../../plugins/crypto';
import { setItem } from '../../plugins/storage';
import auth from '@react-native-firebase/auth';
import { StorageKey } from '../../general-types/general-types';

const SignIn: FC = () => {
  // region state variables
  const { setUser } = useAuthStore((state) => state as AuthState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // endregion

  // region methods
  const handleSignIn = async () => {
    const key = await generateKey(password);
    setItem(StorageKey.Key, key);
    const response = await auth().signInWithEmailAndPassword(email, password);
    setUser(response.user);
  };
  // endregion

  return (
    <Page>
      <ScrollView scrollEnabled keyboardShouldPersistTaps="handled" contentContainerStyle={styles.container}>
        <Headline type={HeadlineType.Heading} text="Sign in" />
        <InputField
          onChange={(v) => setEmail(v)}
          label="Email address"
          value={email}
          placeholder="Enter your email address"
          margin
        />
        <InputField
          onChange={(v) => setPassword(v)}
          label="Password"
          value={password}
          placeholder="Enter your password"
          margin
          secure
        />
        <Button type={ButtonType.Primary} text="Sign in" onPress={handleSignIn} />
      </ScrollView>
    </Page>
  );
};

export default SignIn;
