import { Path, Route } from './routes.type';
import OnboardingNavigationContainer from '../navigation-containers/onboarding/onboarding-navigation-container';

export const tabRoutes: Route[] = [{ name: Path.OnboardingJourney, component: OnboardingNavigationContainer }];
