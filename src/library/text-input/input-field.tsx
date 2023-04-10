import React, { FC, useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import { TextInputProps } from './input-field.type';
import Body from '../body/body';
import { BodyType } from '../body/body.type';
import { error, primary50, text } from '../../../vars.styles';
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
  secure,
  disabled,
  autoFocus,
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

  useEffect(() => {
    if (autoFocus) {
      inputRef?.current?.focus();
    }
  }, []);
  // endregion

  return (
    <View style={styles.inputContainer}>
      {!!label && <Body type={BodyType.Small} text={label} color={errorMessage ? error : text} />}
      <TextInput
        placeholderTextColor={primary50}
        editable={!disabled}
        ref={inputRef}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        secureTextEntry={secure}
        style={[
          styles.input,
          focussed ? styles.inputFocussed : null,
          margin && !errorMessage ? styles.margin : null,
          errorMessage ? styles.error : null,
        ]}
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
        onSubmitEditing={() => {
          if (onSubmit) {
            onSubmit();
          }
        }}
      />
      {!!errorMessage && <Body type={BodyType.Small} text={errorMessage} color={error} />}
    </View>
  );
};

export default InputField;
