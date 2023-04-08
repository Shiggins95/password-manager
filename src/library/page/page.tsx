import React, { FC } from 'react';
import { SafeAreaView, View } from 'react-native';
import { PageProps } from './page.type';
import { styles } from './page.style';

const Page: FC<PageProps> = ({ type = 'view', children }) => {
  const ViewComponent = type === 'safe' ? SafeAreaView : View;

  return <ViewComponent style={styles.page}>{children}</ViewComponent>;
};

export default Page;
