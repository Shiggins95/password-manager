import React, { FC, useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { DropdownProps } from './dropdown.type';
import { styles } from './dropdown.style';
import Body from '../body/body';
import { BodyType } from '../body/body.type';
import { error, primary50, text } from '../../../../encropass/vars.styles';
import BottomSheet from '../bottom-sheet/bottom-sheet';

const Dropdown: FC<DropdownProps> = ({
  options,
  value,
  label,
  handleChange,
  placeholder,
  errorMessage,
  contentTitle,
  cleanup,
}) => {
  // region state variables
  const [showContent, setShowContent] = useState(false);
  // endregion

  // region define apis
  // endregion

  // region define httpOperationReducers
  // endregion

  // region methods
  const handleSelection = (value: string) => {
    setShowContent(false);
    handleChange(value);
  };
  // endregion

  // region useEffects
  useEffect(() => {
    if (cleanup && showContent) {
      cleanup();
    }
  }, [showContent]);
  // endregion

  return (
    <View style={styles.container}>
      <Body type={BodyType.Small} text={label} color={errorMessage ? error : text} />
      <TouchableOpacity
        style={[styles.inputBox, errorMessage ? styles.error : null]}
        onPress={() => setShowContent(true)}
      >
        {!!value && <Body type={BodyType.Normal} text={value} />}
        {!!placeholder && !value && <Body type={BodyType.Small} text={placeholder} color={primary50} />}
      </TouchableOpacity>
      {!!errorMessage && <Body type={BodyType.Small} text={errorMessage} color={error} />}
      {showContent && (
        <BottomSheet handleClose={() => setShowContent(false)} title={contentTitle}>
          <ScrollView>
            {options.map(({ label, value }, index) => {
              return (
                <TouchableOpacity
                  onPress={() => handleSelection(value)}
                  key={label}
                  style={[styles.dropdownOption, index === 0 ? styles.first : null]}
                >
                  <Body type={BodyType.Normal} text={label} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </BottomSheet>
      )}
    </View>
  );
};

export default Dropdown;
