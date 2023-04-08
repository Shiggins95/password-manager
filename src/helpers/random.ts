import { RandomStringProps } from './random/random.type';

export const getRandomString = ({
  length,
  includeSpecialChars,
  includeNumbers,
  includeUpperCase,
}: RandomStringProps): string => {
  if (length === 0) {
    return ' ';
  }
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '123456789';
  const specialChars = '!@£$%&*_-.,#€';

  let string = letters;
  if (includeNumbers) {
    string += numbers;
  }
  if (includeSpecialChars) {
    string += specialChars;
  }
  if (includeUpperCase) {
    string += letters.toUpperCase();
  }

  return Array.from({ length }, () => '').reduce((prev) => {
    return `${prev}${string[Math.floor(Math.random() * string.length)]}`;
  }, '');
};
