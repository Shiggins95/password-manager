import { Path, StackRoute, StackScreenOptions } from '../../routes/routes.type';
import LandingPage from '../../pages/landing-page/landing-page';

export const defaultOptions: StackScreenOptions = {
  headerShown: false,
  title: '',
};
export const onboardingRoutes: StackRoute[] = [
  { name: Path.LandingPage, component: LandingPage, options: defaultOptions },
  { name: Path.SignIn, component: LandingPage, options: defaultOptions },
  { name: Path.SignUp, component: LandingPage, options: defaultOptions },
];
