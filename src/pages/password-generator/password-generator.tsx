import React, { FC, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './password-generator.style';
import Page from '../../library/page/page';
import Headline from '../../library/headline/headline';
import { HeadlineType } from '../../library/headline/headline.type';
import Body from '../../library/body/body';
import { BodyType } from '../../library/body/body.type';
import { getRandomString } from '../../helpers/random';
import Icon from '../../library/icon/icon';
import { primary } from '../../../vars.styles';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from '../../library/snackbar/snackbar';
import { SnackbarType } from '../../library/snackbar/snackbar.type';
import Slider from '@react-native-community/slider';

const PasswordGenerator: FC = () => {
  // region define auth
  // endregion

  // region state variables
  const [passwordLength, setPasswordLength] = useState(20);
  const [password, setPassword] = useState(
    getRandomString({
      includeUpperCase: true,
      includeSpecialChars: false,
      includeNumbers: true,
      length: 20,
    }),
  );
  const [copied, setCopied] = useState(false);
  // endregion

  // region define apis
  // endregion

  // region define httpOperationReducers
  // endregion

  // region methods
  const handleSliderChange = (value: number) => {
    const newPassword = getRandomString({
      length: value,
      includeSpecialChars: false,
      includeUpperCase: true,
      includeNumbers: true,
    });
    setPasswordLength(value);
    setPassword(newPassword);
  };
  const copyToClipboard = () => {
    Clipboard.setString(password);
    setCopied(true);
  };
  // endregion

  // region useEffects
  // endregion

  return (
    <Page>
      {copied && <Snackbar text="Copied to clipboard!" type={SnackbarType.Success} callback={() => setCopied(false)} />}
      <View style={styles.container}>
        <Headline type={HeadlineType.Heading} text="Password generator" />
        <View style={styles.lengthContainer}>
          <Body type={BodyType.Bold} text="Length" />
          <Body type={BodyType.Normal} text={passwordLength.toString()} style={styles.length} />
        </View>
        <Slider
          step={1}
          style={styles.slider}
          minimumValue={0}
          maximumValue={40}
          value={passwordLength}
          onValueChange={handleSliderChange}
        />
        <View style={styles.passwordOutputContainer}>
          <Body type={BodyType.Normal} text={password} style={styles.passwordOutput} />
          <TouchableOpacity style={styles.copyToClipboard} onPress={copyToClipboard}>
            <Icon name="copy" provider="Feather" color={primary} size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </Page>
  );
};

export default PasswordGenerator;
