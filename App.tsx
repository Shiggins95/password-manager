import React from 'react';
import { StyleSheet, View } from 'react-native';
import Body from './src/library/body/body';
import { BodyType } from './src/library/body/body.type';
import Button from './src/library/button/button';
import { ButtonType } from './src/library/button/button.type';
import { deleteItem, getItem, setItem } from './src/plugins/storage';

function App(): JSX.Element {
  const store = () => {
    setItem('test_value', 'this is a test value');
    console.log('stored item');
  };
  const get = () => {
    console.log('get item', getItem('test_value'));
  };
  const deleteStorageItem = () => {
    deleteItem('test_value');
    console.log('deleted item');
  };
  return (
    <View style={styles.page}>
      <Body type={BodyType.Normal} text="Hello world Normal" />
      <Body type={BodyType.Bold} text="Hello world Bold" />
      <Body type={BodyType.Small} text="Hello world Small" />
      <Body type={BodyType.BoldSmall} text="Hello world BoldSmall" />
      <Body type={BodyType.Link} text="Hello world Link" />
      <Body type={BodyType.LinkSmall} text="Hello world LinkSmall" margin/>
      <Button text="store" type={ButtonType.Primary} onPress={store} margin />
      <Button text="GET" type={ButtonType.Secondary} onPress={get} margin />
      <Button text="DELETE" type={ButtonType.Tertiary} onPress={deleteStorageItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
});

export default App;
