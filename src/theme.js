import { extendTheme } from '@chakra-ui/react';

export const themeProvider = extendTheme({
  // Whatever you pass here will be added to the colors not replace it
  colors: {
    primary: '#845EC2',
    secondary: '#FF6F91',
    highlight: '#00C9A7',
    warning: '#FFC75F',
    danger: '#C34A36',
  },
});
