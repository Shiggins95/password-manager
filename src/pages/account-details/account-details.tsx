import React, { FC, useState } from 'react';
import Page from '../../library/page/page';
import { styles } from './account-details.style';
import { TouchableOpacity, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from '../../library/icon/icon';
import { secondary } from '../../../../encropass/vars.styles';
import SideTray from '../../library/side-tray/side-tray';
import Body from '../../library/body/body';
import { BodyType } from '../../library/body/body.type';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AccountDetailsLinkProps } from './account-details.type';
import { Path } from '../../routes/routes.type';
import { navigate } from '../../navigate';
import Headline from '../../library/headline/headline';
import { HeadlineType } from '../../library/headline/headline.type';

const AccountDetailsLink: FC<AccountDetailsLinkProps> = ({ label, link }) => {
  const handlePress = () => {
    navigate.toLink(link);
  };
  return (
    <TouchableOpacity style={[styles.link]} onPress={handlePress}>
      <Body type={BodyType.Normal} text={label} />
      <Icon name="chevron-thin-right" provider="Entypo" size={24} color={secondary} />
    </TouchableOpacity>
  );
};

const AccountDetails: FC = () => {
  // region state variables
  const { top: safeAreaTop } = useSafeAreaInsets();
  const [showTray, setShowTray] = useState(false);
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
      {showTray && (
        <SideTray side="left" handleClose={() => setShowTray(false)}>
          <TouchableOpacity style={styles.signOut} onPress={handleSignOut}>
            <Body type={BodyType.Normal} text="Sign out" />
          </TouchableOpacity>
        </SideTray>
      )}
      <View style={[styles.top, { paddingTop: safeAreaTop + 20 }]}>
        <Headline type={HeadlineType.Heading} text="Account details" noMargin />
        <TouchableOpacity style={styles.userIcon} onPress={() => setShowTray((prev) => !prev)}>
          <Icon name="user" provider="AntDesign" color={secondary} size={30} />
        </TouchableOpacity>
      </View>
      <View style={[styles.bottom]}>
        <AccountDetailsLink link={Path.ManageEmails} label="Manage emails" />
      </View>
    </Page>
  );
};

export default AccountDetails;
