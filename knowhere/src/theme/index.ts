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
        rentItemTextKey: {
          fontSize: 13,
          color: '#151515',
          fontFamily: 'body',
          fontWeight: 400,
        },
        rentItemTextValue: {
          fontSize: 13,
          color: '#595959',
          fontFamily: 'body',
          fontWeight: 400,
          textTransform: 'capitalize',
        },
      },
    },
    Button: {
      variants: {
        primaryButton: {
          bgColor: 'primary',
          w: {
            base: '75%',
            md: '25%',
          },
          _text: {color: 'white'},
        },
        thickPrimaryBtn: {
          bgColor: 'primary',
          borderRadius: 10,
          padding: 6,

          _text: {
            color: 'white',
            p: 1.5,
            fontSize: 14,
          },
        },
      },
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
