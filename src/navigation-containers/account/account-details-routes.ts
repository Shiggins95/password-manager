import { Path, StackRoute, StackScreenOptions } from '../../routes/routes.type';
import AccountDetails from '../../pages/account-details/account-details';
import ManageEmails from '../../pages/manage-emails/manage-emails';
import BackButton from '../../components/back-button/back-button';

export const defaultOptions: StackScreenOptions = {
  headerTransparent: true,
  title: '',
};
export const accountDetailsRoutes: StackRoute[] = [
  {
    name: Path.AccountDetails,
    path: Path.AccountDetails,
    component: AccountDetails,
    options: { ...defaultOptions },
  },
  {
    name: Path.ManageEmails,
    path: Path.ManageEmails,
    component: ManageEmails,
    options: { ...defaultOptions, headerLeft: BackButton },
  },
];
