import React, { FC, useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './password-generator.style';
import Page from '../../library/page/page';
import Headline from '../../library/headline/headline';
import { HeadlineType } from '../../library/headline/headline.type';
import Body from '../../library/body/body';
import { BodyType } from '../../library/body/body.type';
import { getRandomString } from '../../helpers/random';
import Icon from '../../library/icon/icon';
import { primary, primary20, secondary } from '../../../../encropass/vars.styles';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from '../../library/snackbar/snackbar';
import { SnackbarType } from '../../library/snackbar/snackbar.type';
import Slider from '@react-native-community/slider';
import Toggle from '../../library/toggle/toggle';
import Button from '../../library/button/button';
import { ButtonType } from '../../library/button/button.type';
import { ToggleRowProps } from './password-generator.type';
import WebsiteModal from '../../components/website-modal/website-modal';

const ToggleRow: FC<ToggleRowProps> = ({ first, text, last, value, onChange }) => {
  return (
    <View style={[styles.toggleSection, first ? styles.first : null, last ? styles.last : null]}>
      <Body type={BodyType.Normal} text={text} />
      <Toggle value={value} handleChange={onChange} />
    </View>
  );
};

const PasswordGenerator: FC = () => {
  // region state variables
  const [passwordLength, setPasswordLength] = useState(25);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeSpecialChars, setIncludeSpecialCharacters] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [password, setPassword] = useState(
    getRandomString({
      includeUpperCase,
      includeSpecialChars,
      includeNumbers,
      length: passwordLength,
    }),
  );
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState<boolean>();
  const [showModal, setShowModal] = useState(false);
  // endregion

  // region methods
  const handleSliderChange = (value: number) => {
    setPasswordLength(value);
  };
  const copyToClipboard = () => {
    Clipboard.setString(password);
    setCopied(true);
  };
  const handleSave = () => {
    setShowModal(true);
  };
  const handleCloseModal = (saved?: boolean) => {
    if (saved === true) {
      setSaved(true);
      setPassword(
        getRandomString({
          length: passwordLength,
          includeSpecialChars,
          includeUpperCase,
          includeNumbers,
        }),
      );
    }
    setShowModal(false);
  };
  // endregion

  // region useEffects
  useEffect(() => {
    const newPassword = getRandomString({
      length: passwordLength,
      includeSpecialChars,
      includeUpperCase,
      includeNumbers,
    });
    setPassword(newPassword);
  }, [includeNumbers, includeUpperCase, includeSpecialChars, passwordLength]);
  // endregion

  return (
    <Page>
      {showModal && <WebsiteModal password={password} handleClose={handleCloseModal} />}
      {copied && <Snackbar text="Copied to clipboard!" type={SnackbarType.Success} callback={() => setCopied(false)} />}
      {saved === true && (
        <Snackbar text="Password saved!" type={SnackbarType.Success} callback={() => setSaved(undefined)} />
      )}
      {saved === false && (
        <Snackbar text="Something went wrong!" type={SnackbarType.Error} callback={() => setSaved(undefined)} />
      )}
      <View style={styles.container}>
        <Headline type={HeadlineType.Heading} text="Password generator" />
        <View style={styles.passwordOutputContainer}>
          <Body type={BodyType.Normal} text={password} style={styles.passwordOutput} />
          <TouchableOpacity style={styles.copyToClipboard} onPress={copyToClipboard}>
            <Icon name="copy" provider="Feather" color={primary} size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.sliderContainer}>
          <Slider
            step={1}
            style={styles.slider}
            minimumValue={10}
            maximumValue={40}
            value={passwordLength}
            onValueChange={handleSliderChange}
            thumbTintColor={primary}
            maximumTrackTintColor={primary20}
            minimumTrackTintColor={secondary}
            tapToSeek
          />
          <View style={styles.labelsContainer}>
            <Body type={BodyType.Small} text="10" margin />
            <Body type={BodyType.Bold} text={passwordLength.toString()} margin color={secondary} />
            <Body type={BodyType.Small} text="40" margin />
          </View>
        </View>
        <ToggleRow
          onChange={() => setIncludeUpperCase((prevState) => !prevState)}
          value={includeUpperCase}
          text="Include uppercase letters"
        />
        <ToggleRow
          onChange={() => setIncludeSpecialCharacters((prevState) => !prevState)}
          value={includeSpecialChars}
          text="Include special character"
        />
        <ToggleRow
          onChange={() => setIncludeNumbers((prevState) => !prevState)}
          value={includeNumbers}
          text="Include numbers"
          last
        />
        <Button type={ButtonType.Primary} text="Add password" onPress={handleSave} />
      </View>
    </Page>
  );
};

export default PasswordGenerator;
