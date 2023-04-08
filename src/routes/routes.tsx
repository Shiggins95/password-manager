import { Path, StackRoute } from './routes.type';
import OnboardingNavigationContainer from '../navigation-containers/onboarding/onboarding-navigation-container';
import PasswordsNavigationContainer from '../navigation-containers/passwords/passwords-navigation-container';
import AccountDetails from '../pages/account-details/account-details';
import GeneratorNavigationContainer from '../navigation-containers/generator/generator-navigation-container';

export const nonAuthRoutes: StackRoute[] = [
  {
    name: Path.OnboardingJourney,
    path: Path.OnboardingJourney,
    component: OnboardingNavigationContainer,
    options: {
      headerShown: false,
    },
  },
];

export const authRoutes: StackRoute[] = [
  {
    name: Path.PasswordsJourney,
    path: Path.PasswordsJourney,
    component: PasswordsNavigationContainer,
    label: 'Passwords',
    testId: 'passwordsJourney',
    options: {
      headerShown: false,
    },
  },
  {
    name: Path.GeneratorJourney,
    path: Path.GeneratorJourney,
    component: GeneratorNavigationContainer,
    label: 'Generate',
    testId: 'generateJourney',
    options: {
      headerShown: false,
    },
  },
  {
    name: Path.AccountDetailsJourney,
    path: Path.AccountDetailsJourney,
    testId: 'accountDetailsJourney',
    component: AccountDetails,
    label: 'Account',
    options: {
      headerShown: false,
    },
  },
];
