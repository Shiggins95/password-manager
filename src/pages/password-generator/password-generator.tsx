import React, { FC } from 'react';
import { View } from 'react-native';
import { styles } from './password-generator.style';
import Page from '../../library/page/page';
import Headline from '../../library/headline/headline';
import { HeadlineType } from '../../library/headline/headline.type';

const PasswordGenerator: FC = () => {
  console.log('Prevent collapse');

  // region define auth
  // endregion

  // region state variables
  // endregion

  // region define apis
  // endregion

  // region define httpOperationReducers
  // endregion

  // region methods
  // endregion

  // region useEffects
  // endregion

  return (
    <Page>
      <View style={styles.container}>
        <Headline type={HeadlineType.Heading} text="Password generator" />
      </View>
    </Page>
  );
};

export default PasswordGenerator;
