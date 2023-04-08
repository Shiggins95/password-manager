import { Path, StackRoute, StackScreenOptions } from '../../routes/routes.type';
import PasswordGenerator from '../../pages/password-generator/password-generator';

export const defaultOptions: StackScreenOptions = {
  headerTransparent: true,
  title: '',
};
export const generatorRoutes: StackRoute[] = [
  {
    name: Path.PasswordGenerator,
    path: Path.PasswordGenerator,
    component: PasswordGenerator,
    options: { ...defaultOptions },
  },
];
