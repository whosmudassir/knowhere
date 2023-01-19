import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors: {
    primary: '#5667FD',
    secondary: '#F4F5F9',
  },

  components: {
    Text: {
      variants: {
        semiBoldText: {
          fontWeight: 500,
          fontSize: 14,
          color: '#303030',
          fontFamily: 'body',
        },
      },
    },
    Button: {
      variants: {},
    },
    Link: {variants: {}},
  },

  fontConfig: {
    Inter: {
      100: {
        normal: 'Inter-Light',
      },
      200: {
        normal: 'Inter-Thin',
      },
      300: {
        normal: 'Inter-Regular',
      },
      400: {
        normal: 'Inter-Medium',
      },
      500: {
        normal: 'Inter-SemiBold',
      },
      600: {
        normal: 'Inter-Bold',
      },
      700: {
        normal: 'Extra-Bold',
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    body: 'Inter',
  },
});
