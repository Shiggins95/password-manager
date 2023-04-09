import React, { FC } from 'react';
import Page from '../../library/page/page';
import Headline from '../../library/headline/headline';
import { HeadlineType } from '../../library/headline/headline.type';
import { styles } from './account-details.style';
import { View } from 'react-native';
import Button from '../../library/button/button';
import { ButtonType } from '../../library/button/button.type';
import auth from '@react-native-firebase/auth';

const AccountDetails: FC = () => {
  console.log('Prevent collapse');

  // region define auth
  // endregion

  // region state variables
  // endregion

  // region define apis
  // endregion

  // region define httpOperationReducers
  // endregion

  // region method
  const handleSignOut = async () => {
    await auth().signOut();
  };
  // endregion

  // region useEffects
  // endregion

  return (
    <Page>
      <View style={styles.container}>
        <Headline type={HeadlineType.Heading} text="Account" />
        <Button type={ButtonType.Primary} text="Sign out" onPress={handleSignOut} />
      </View>
    </Page>
  );
};

export default AccountDetails;
