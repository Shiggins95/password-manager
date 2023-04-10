import { createNavigationContainerRef } from '@react-navigation/native';
import { Path } from './routes/routes.type';

export const navigationRef = createNavigationContainerRef();

export const navigate = {
  back: (props?: any): void => {
    navigationRef.setParams(props?.props as never);
    navigationRef.goBack();
  },
  toLink: (link: Path) => {
    navigationRef.navigate(link as never);
  },
  toSignIn: () => {
    navigationRef.navigate(Path.SignIn as never);
  },
  toSignUp: () => {
    navigationRef.navigate(Path.SignUp as never);
  },
};
