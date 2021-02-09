// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';
import globals from './globals';
import { colors } from './foundations';

// 3. extend the theme
const theme = extendTheme({ colors, globals });

export default theme;
