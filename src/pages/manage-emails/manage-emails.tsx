import React, { FC, useEffect, useState } from 'react';
import Page from '../../library/page/page';
import Headline from '../../library/headline/headline';
import { HeadlineType } from '../../library/headline/headline.type';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './manage-emails.style';
import { emailRealtimeUpdates, getEmails } from '../../plugins/firestore';
import { useAuthStore } from '../../zustand/auth/auth';
import { AuthState } from '../../zustand/auth/auth.type';
import { useNavigation } from '@react-navigation/native';
import AddButton from '../../components/add-button/add-button';
import AddEmailModal from '../../components/add-email-modal/add-email-modal';
import { Email } from '../../api/email-api.type';
import Snackbar from '../../library/snackbar/snackbar';
import { SnackbarType } from '../../library/snackbar/snackbar.type';
import Body from '../../library/body/body';
import { BodyType } from '../../library/body/body.type';
import { EmailRowProps, EmailSnackbar } from './manage-emails.type';
import { EmailApi } from '../../api/email-api';
import Icon from '../../library/icon/icon';
import { error, primary } from '../../../vars.styles';
import Modal from '../../library/modal/modal';
import Button from '../../library/button/button';
import { ButtonType } from '../../library/button/button.type';

const EmailRow: FC<EmailRowProps> = ({ email, handleUpdate, handleDelete }) => {
  return (
    <View style={styles.emailRow}>
      <View style={styles.left}>
        <TouchableOpacity style={styles.primaryButton} onPress={() => handleUpdate(email.id)}>
          {email.primary && <View style={styles.selected} />}
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <Body type={BodyType.Normal} text={email.email} />
        {email.primary && (
          <View style={styles.primaryLabel}>
            <Body type={BodyType.BoldSmall} text="Primary" color={primary} />
          </View>
        )}
      </View>
      <View style={styles.right}>
        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(email.id)}>
          <Icon name="delete" provider="AntDesign" size={24} color={error} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ManageEmails: FC = () => {
  // region state variables
  const navigation = useNavigation();
  const { user } = useAuthStore((state) => state as AuthState);
  const [showAddModal, setShowAddModal] = useState(false);
  const [emails, setEmails] = useState<Email[]>([]);
  const [confirmModalDetails, setConfirmModalDetails] = useState({ show: false, id: '' });
  const [snackbarSettings, setSnackbarSettings] = useState<EmailSnackbar>({
    show: false,
  });
  // endregion

  // region define apis
  const api = new EmailApi({
    userId: user?.uid as string,
  });
  // endregion

  // region define httpOperationReducers
  // endregion

  // region methods
  const handleModalClose = (createdSuccessfully?: boolean) => {
    setShowAddModal(false);
    if (createdSuccessfully === undefined) {
      return;
    }
    const settings: EmailSnackbar = {
      show: true,
      type: createdSuccessfully ? SnackbarType.Success : SnackbarType.Error,
      callback: () => setSnackbarSettings({ show: false }),
      text: createdSuccessfully ? 'Email added!' : 'Failed to add email',
    };
    setSnackbarSettings(settings);
  };
  const handleUpdate = async (id: string) => {
    const correspondingEmail = emails.find((e) => e.id === id);
    if (correspondingEmail?.primary) {
      return;
    }
    const { success } = await api.changePrimaryEmail(id, emails);
    const settings: EmailSnackbar = {
      show: true,
      type: success ? SnackbarType.Success : SnackbarType.Error,
      callback: () => setSnackbarSettings({ show: false }),
      text: success ? 'Primary email updated' : 'Failed to update primary email',
    };
    setSnackbarSettings(settings);
  };
  const handleDelete = async (id: string, skipPrimaryCheck?: boolean) => {
    if (!skipPrimaryCheck) {
      const corresponding = emails.find((e) => e.id === id);
      if (corresponding?.primary) {
        setConfirmModalDetails({ show: true, id });
        return;
      }
    }
    const { success } = await api.deleteEmail(id, emails);
    const settings: EmailSnackbar = {
      show: true,
      type: success ? SnackbarType.Success : SnackbarType.Error,
      callback: () => setSnackbarSettings({ show: false }),
      text: success ? 'Email removed' : 'Failed to remove email',
    };
    setSnackbarSettings(settings);
    if (confirmModalDetails.show) {
      setConfirmModalDetails({ show: false, id: '' });
    }
  };
  // endregion

  // region useEffects
  useEffect(() => {
    const subscriber = emailRealtimeUpdates(user?.uid as string, (_emails) => {
      setEmails(_emails?.emails || []);
    });
    getEmails(user?.uid as string).then((res) => {
      setEmails(res?.emails || []);
    });
    navigation.setOptions({
      headerRight: () => <AddButton handlePress={() => setShowAddModal(true)} />,
    });
    return () => subscriber();
  }, []);
  // endregion

  return (
    <Page>
      {snackbarSettings.show && (
        <Snackbar
          text={snackbarSettings.text as string}
          type={snackbarSettings.type as SnackbarType}
          callback={snackbarSettings.callback as () => void}
        />
      )}
      {showAddModal && <AddEmailModal allEmails={emails} handleClose={handleModalClose} />}
      {confirmModalDetails.show && (
        <Modal handleClose={() => setConfirmModalDetails({ show: false, id: '' })}>
          <View style={styles.confirmModalContent}>
            <Headline type={HeadlineType.Subheading} text="Confirm" />
            <Body type={BodyType.Normal} text="This email is your primary email." />
            <Body type={BodyType.Normal} text="Are you sure you want to delete it?" margin />
            <Button
              type={ButtonType.Tertiary}
              text="Yes"
              onPress={() => handleDelete(confirmModalDetails.id, true)}
              margin
            />
            <Button
              type={ButtonType.Primary}
              text="No"
              onPress={() => setConfirmModalDetails({ show: false, id: '' })}
            />
          </View>
        </Modal>
      )}
      <View style={styles.container}>
        <Headline type={HeadlineType.Heading} text="Manage emails" />
        {emails.map((email) => {
          return <EmailRow email={email} handleUpdate={handleUpdate} handleDelete={handleDelete} />;
        })}
      </View>
    </Page>
  );
};

export default ManageEmails;
