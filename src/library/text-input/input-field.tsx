import React, { FC, useState } from 'react';
import { TextInput, View } from 'react-native';
import { TextInputProps } from './input-field.type';
import Body from '../body/body';
import { BodyType } from '../body/body.type';
import { error, text } from '../../../vars.styles';
import { styles } from './input-field.style';

const InputField: FC<TextInputProps> = ({
  label,
  onBlur,
  onChange,
  onFocus,
  onSubmit,
  value,
  placeholder,
  errorMessage,
  inputRef,
  margin,
}) => {
  // region define auth
  // endregion

  // region state variables
  const [focussed, setFocussed] = useState(false);
  // endregion

  // region define apis
  // endregion

  // region define httpOperationReducers
  // endregion

  // region methods
  // endregion

  // region useEffects
  // endregion

  return (
    <View style={styles.inputContainer}>
      {!!label && <Body type={BodyType.Small} text={label} color={errorMessage ? error : text} />}
      <TextInput
        ref={inputRef}
        onFocus={() => {
          if (onFocus) {
            onFocus();
          }
          setFocussed(true);
        }}
        onBlur={() => {
          if (onBlur) {
            onBlur();
          }
          setFocussed(false);
        }}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        style={[
          styles.input,
          focussed ? styles.inputFocussed : null,
          margin && !errorMessage ? styles.margin : null,
          errorMessage ? styles.error : null,
        ]}
      />
      {!!errorMessage && <Body type={BodyType.Small} text={errorMessage} color={error} />}
    </View>
  );
};

export default InputField;
