import React, { FC, useEffect, useRef, useState } from 'react';
import Headline from '../../library/headline/headline';
import { HeadlineType } from '../../library/headline/headline.type';
import InputField from '../../library/text-input/input-field';
import Modal from '../../library/modal/modal';
import { TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { styles } from './website-modal.style';
import { WebsiteModalProps } from './website-modal.type';
import Button from '../../library/button/button';
import { ButtonType } from '../../library/button/button.type';
import { emailRealtimeUpdates, getPasswords, savePasswords } from '../../plugins/firestore';
import { encryptData, generateUuid } from '../../plugins/crypto';
import { getItem } from '../../plugins/storage';
import { useAuthStore } from '../../zustand/auth/auth';
import { AuthState } from '../../zustand/auth/auth.type';
import { StorageKey } from '../../general-types/general-types';
import Dropdown from '../../library/dropdown/dropdown';
import { EmailApi } from '../../api/email-api';
import { Email } from '../../api/email-api.type';

const WebsiteModal: FC<WebsiteModalProps> = ({ handleClose, password }) => {
  // region state variables
  const { user } = useAuthStore((state) => state as AuthState);
  const emailRef = useRef<TextInput | null>(null);
  const websiteRef = useRef<TextInput | null>(null);
  const usernameRef = useRef<TextInput | null>(null);
  const [website, setWebsite] = useState('');
  const [websiteError, setWebsiteError] = useState('');
  const [emails, setEmails] = useState<Email[]>([]);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  // endregion

  // region define apis
  const emailApi = new EmailApi({
    userId: user?.uid as string,
  });
  // endregion

  // region define httpOperationReducers
  // endregion

  // region methods
  const dismissKeyboard = () => {
    emailRef.current?.blur();
    websiteRef.current?.blur();
    usernameRef.current?.blur();
  };
  const savePassword = async () => {
    if (!website || (!email && !username)) {
      if (!website) {
        setWebsiteError('Website is required.');
      }
      if (!email || !username) {
        setEmailError('Username or email is required');
        setUsernameError('Username or email is required');
      }
      return;
    }
    let passwords = await getPasswords(user?.uid as string);
    const { cipher, iv } = await encryptData(password, getItem(StorageKey.Key) as string);
    const id = await generateUuid();
    if (!passwords) {
      passwords = { passwords: [{ id, password: cipher, iv, email, username, website }] };
    } else {
      passwords.passwords.push({ id, password: cipher, iv, email, username, website });
    }
    const savedPasswords = await savePasswords(user?.uid as string, passwords);
    handleClose(savedPasswords);
  };
  // endregion

  // region useEffects
  useEffect(() => {
    const subscriber = emailRealtimeUpdates(user?.uid as string, (_emails) => {
      setEmails(_emails?.emails || []);
    });
    emailApi.getEmails().then((res) => {
      if (res.success) {
        setEmails(res?.data || []);
        const primary = ((res?.data || []) as Email[]).find((e) => e.primary);
        if (primary) {
          setEmail(primary.email);
        }
      }
    });
    return () => subscriber();
  }, []);
  // endregion

  return (
    <Modal handleClose={() => handleClose()}>
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
            placeholder="Enter username"
            margin
            label="Username"
            inputRef={usernameRef}
            errorMessage={usernameError}
          />
          <Dropdown
            options={emails.map((e) => ({ label: e.email, value: e.email }))}
            label="Email"
            handleChange={(value) => setEmail(value)}
            value={email}
            placeholder="Enter email address"
            errorMessage={emailError}
            contentTitle="Select email address"
            cleanup={dismissKeyboard}
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
