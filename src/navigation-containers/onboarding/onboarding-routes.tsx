import { Path, StackRoute, StackScreenOptions } from '../../routes/routes.type';
import LandingPage from '../../pages/landing-page/landing-page';
import SignIn from '../../pages/signin/signin';
import BackButton from '../../components/back-button/back-button';
import Signup from '../../pages/signup/signup';

export const defaultOptions: StackScreenOptions = {
  headerTransparent: true,
  // headerShown: true,
  title: '',
};
export const onboardingRoutes: StackRoute[] = [
  {
    name: Path.LandingPage,
    path: Path.LandingPage,
    component: LandingPage,
    options: defaultOptions,
  },
  {
    name: Path.SignIn,
    path: Path.SignIn,
    component: SignIn,
    options: { ...defaultOptions, headerLeft: BackButton },
  },
  {
    name: Path.SignUp,
    path: Path.SignUp,
    component: Signup,
    options: { ...defaultOptions, headerLeft: BackButton },
  },
];
