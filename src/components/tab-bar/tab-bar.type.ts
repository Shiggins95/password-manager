import { BottomTabDescriptorMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';

export interface TabBarProps {
  descriptors: BottomTabDescriptorMap;
  state: TabNavigationState<ParamListBase>;
  navigation: any;
}
