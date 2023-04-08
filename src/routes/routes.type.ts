import * as React from 'react';
import { FC } from 'react';
export enum Path {
  OnboardingJourney = 'OnboardingJourney',
  LandingPage = 'LandingPage',
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  AccountDetails = 'AccountDetails',
}

export interface TabScreenOptions {
  tabBarIcon?: ({ focused }: { focused: boolean }) => React.ReactNode;
}

export interface StackScreenOptions {
  headerTransparent?: boolean;
  headerShown?: boolean;
  headerLeft?: FC<any>;
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
}
