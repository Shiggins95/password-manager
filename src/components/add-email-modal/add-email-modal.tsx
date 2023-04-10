import React, { FC, useRef, useState } from 'react';
import { TextInput, TouchableWithoutFeedback, View } from 'react-native';
import Modal from '../../library/modal/modal';
import Headline from '../../library/headline/headline';
import { HeadlineType } from '../../library/headline/headline.type';
import InputField from '../../library/text-input/input-field';
import Button from '../../library/button/button';
import { ButtonType } from '../../library/button/button.type';
import { AddEmailModalProps } from './add-email-modal.type';
import { EmailApi } from '../../api/email-api';
import { useAuthStore } from '../../zustand/auth/auth';
import { AuthState } from '../../zustand/auth/auth.type';
import { generateUuid } from '../../plugins/crypto';

const AddEmailModal: FC<AddEmailModalProps> = ({ handleClose, allEmails }) => {
  // region state variables
  const { user } = useAuthStore((state) => state as AuthState);
  const [newEmail, setNewEmail] = useState('');
  const [newEmailError, setNewEmailError] = useState('');
  const newEmailRef = useRef<TextInput | null>(null);
  // endregion

  // region api
  const api = new EmailApi({ userId: user?.uid as string });
  // endregion

  // region methods
  const closeAddEmailModal = (createdSuccessfully?: boolean) => {
    handleClose(createdSuccessfully);
    setNewEmailError('');
  };

  const dismissKeyboard = () => {
    newEmailRef.current?.blur();
  };

  const handleCreateEmail = async () => {
    if (!newEmail) {
      setNewEmailError('Email is required');
      return;
    }
    const { success } = await api.createEmail(
      {
        email: newEmail.toLowerCase(),
        primary: false,
        id: await generateUuid(),
      },
      allEmails,
    );
    closeAddEmailModal(success);
  };
  // endregion

  return (
    <Modal handleClose={() => closeAddEmailModal()}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View>
          <Headline type={HeadlineType.Subheading} text="Create email" />
          <InputField
            onChange={(value) => setNewEmail(value)}
            inputRef={newEmailRef}
            value={newEmail}
            label="Email"
            placeholder="Enter your email"
            margin
            errorMessage={newEmailError}
            autoFocus
          />
          <Button type={ButtonType.Primary} text="Create" onPress={handleCreateEmail} />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AddEmailModal;
