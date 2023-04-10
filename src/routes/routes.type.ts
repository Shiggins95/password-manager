import { FC } from 'react';
export enum Path {
  OnboardingJourney = 'OnboardingJourney',
  PasswordsJourney = 'PasswordsJourney',
  GeneratorJourney = 'GeneratorJourney',
  AccountDetailsJourney = 'AccountDetailsJourney',
  LandingPage = 'LandingPage',
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  AllPasswords = 'AllPasswords',
  PasswordGenerator = 'PasswordGenerator',
  AccountDetails = 'AccountDetails',
  ManageEmails = 'ManageEmails',
}

export interface TabScreenOptions {}

export interface StackScreenOptions {
  headerTransparent?: boolean;
  headerShown?: boolean;
  headerLeft?: FC<any>;
  headerRight?: FC<any>;
  title?: string;
}

export interface Route {
  name: Path;
  component: FC<any>;
}

export interface TabRoute extends Route {
  options?: TabScreenOptions;
}

export interface StackRoute extends Route {
  options?: StackScreenOptions;
  path: Path;
  testId?: string;
  label?: string;
}
