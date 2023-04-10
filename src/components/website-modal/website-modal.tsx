import React, { FC, useRef, useState } from 'react';
import Headline from '../../library/headline/headline';
import { HeadlineType } from '../../library/headline/headline.type';
import InputField from '../../library/text-input/input-field';
import Modal from '../../library/modal/modal';
import { TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { styles } from './website-modal.style';
import { WebsiteModalProps } from './website-modal.type';
import Button from '../../library/button/button';
import { ButtonType } from '../../library/button/button.type';
import { getPasswords, savePasswords } from '../../plugins/firestore';
import { encryptData, generateUuid } from '../../plugins/crypto';
import { getItem } from '../../plugins/storage';
import { useAuthStore } from '../../zustand/auth/auth';
import { AuthState } from '../../zustand/auth/auth.type';
import { StorageKey } from '../../general-types/general-types';

const WebsiteModal: FC<WebsiteModalProps> = ({ handleClose, password }) => {
  // region state variables
  const { user } = useAuthStore((state) => state as AuthState);
  const usernameRef = useRef<TextInput | null>(null);
  const websiteRef = useRef<TextInput | null>(null);
  const [website, setWebsite] = useState('');
  const [websiteError, setWebsiteError] = useState('');
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  // endregion

  // region define apis
  // endregion

  // region define httpOperationReducers
  // endregion

  // region methods
  const dismissKeyboard = () => {
    usernameRef.current?.blur();
    websiteRef.current?.blur();
  };
  const savePassword = async () => {
    if (!website || !username) {
      if (!website) {
        setWebsiteError('Website is required.');
      }
      if (!username) {
        setUsernameError('Username is required.');
      }
      return;
    }
    let passwords = await getPasswords(user?.uid as string);
    const { cipher, iv } = await encryptData(password, getItem(StorageKey.Key) as string);
    const id = await generateUuid();
    if (!passwords) {
      passwords = { passwords: [{ id, password: cipher, iv, username, website }] };
    } else {
      passwords.passwords.push({ id, password: cipher, iv, username, website });
    }
    const savedPasswords = await savePasswords(user?.uid as string, passwords);
    handleClose(savedPasswords);
  };
  // endregion

  // region useEffects
  // endregion

  return (
    <Modal>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
          <Headline type={HeadlineType.Subheading} text="Enter account details" />
          <InputField
            onChange={(value) => setWebsite(value)}
            value={website}
            placeholder="Enter website url"
            margin
            label="Website"
            inputRef={websiteRef}
            errorMessage={websiteError}
          />
          <InputField
            onChange={(value) => setUsername(value)}
            value={username}
            placeholder="Enter email / username"
            margin
            label="Email / Username"
            inputRef={usernameRef}
            errorMessage={usernameError}
          />
          <InputField
            disabled
            onChange={() => console.log('never gunna happen')}
            value={password}
            margin
            label="Password"
          />
          <Button type={ButtonType.Primary} text="Save" onPress={savePassword} margin />
          <Button type={ButtonType.Tertiary} text="Cancel" onPress={handleClose} />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default WebsiteModal;
