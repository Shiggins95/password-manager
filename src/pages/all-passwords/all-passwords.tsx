import React, { FC, useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Page from '../../library/page/page';
import Headline from '../../library/headline/headline';
import { HeadlineType } from '../../library/headline/headline.type';
import { styles } from './all-passwords.style';
import { Password } from '../../general-types/general-types';
import { getPasswords, passwordRealtimeUpdates, savePasswords } from '../../plugins/firestore';
import { useAuthStore } from '../../zustand/auth/auth';
import { AuthState } from '../../zustand/auth/auth.type';
import Body from '../../library/body/body';
import { BodyType } from '../../library/body/body.type';
import Snackbar from '../../library/snackbar/snackbar';
import { SnackbarType } from '../../library/snackbar/snackbar.type';
import { decryptList } from '../../plugins/crypto';

const AllPasswords: FC = () => {
  // region state variables
  const { user } = useAuthStore((state) => state as AuthState);
  const [passwords, setPasswords] = useState<Password[]>([]);
  const [deleted, setDeleted] = useState<boolean>();
  // endregion

  // region define apis
  // endregion

  // region define httpOperationReducers
  // endregion

  // region methods
  const deletePassword = async (index: number) => {
    const newPasswords = passwords.filter((p, i) => index !== i);
    const success = await savePasswords(user?.uid as string, { passwords: newPasswords });
    setDeleted(success);
  };
  // endregion

  // region useEffects
  useEffect(() => {
    const subscriber = passwordRealtimeUpdates(user?.uid as string, async (data) => {
      const decrypted = await decryptList(data?.passwords || []);
      setPasswords(decrypted);
    });

    getPasswords(user?.uid as string).then((res) => {
      decryptList(res?.passwords || []).then((data) => {
        setPasswords(data);
      });
    });

    return () => subscriber();
  }, []);
  // endregion

  return (
    <Page>
      {deleted === true && (
        <Snackbar text="Password deleted :(" type={SnackbarType.Success} callback={() => setDeleted(undefined)} />
      )}
      {deleted === false && (
        <Snackbar text="Something went wrong!" type={SnackbarType.Error} callback={() => setDeleted(undefined)} />
      )}
      <View style={styles.container}>
        <Headline type={HeadlineType.Heading} text="Passwords" />
        {passwords.map(({ password }, index) => {
          return (
            <TouchableOpacity onPress={() => deletePassword(index)}>
              <Body type={BodyType.Normal} text={password} />
            </TouchableOpacity>
          );
        })}
      </View>
    </Page>
  );
};

export default AllPasswords;
