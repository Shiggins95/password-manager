import { Path, StackRoute } from '../../routes/routes.type';
import AllPasswords from '../../pages/all-passwords/all-passwords';
import { defaultOptions } from '../onboarding/onboarding-routes';

export const passwordsRoutes: StackRoute[] = [
  {
    name: Path.AllPasswords,
    path: Path.AllPasswords,
    component: AllPasswords,
    options: {
      ...defaultOptions,
    },
  },
];
