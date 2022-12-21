// Pallete: https://coolors.co/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529
export const baseTheme = {
  icon: {
    size: 24,
  },
  pallete: {
    primary: '#5E27DA',
    secondary: '#212529',
    accent: '#37003C',
    error: 'red',
    info: '#5D27DB',
    success: '#26DB85',
    warning: '',
    textPrimary: '#0F1114',
    textSecondary: '#6C757D',
    disabled: '#b5bfc9', // CED4DA
    grayLight: '#e3eaf2',
    body: '#fafafa',
  },
  typography: {
    htmlFontSize: '62.5%', // equivalent to 16px
    fontSize: 16,
    regular: 400,
    bolder: 500,
    bold: 800,
    variants: {
      h1: 40,
      h2: 36,
      h3: 32,
      h4: 28,
      h5: 24,
      h6: 20,
      subtitle: 18,
      body1: 16,
      body2: 14,
      caption: 12,
    },
  },
  zIndex: {
    appBar: 1001,
    modal: 2001,
  },
  shape: {
    borderRadius: 4,
  },
  button: {
    size: {
      small: 24,
      medium: 32,
      large: 40,
    },
  },
  mixins: {
    spacing: 8,
    toolbar: {
      minHeight: 50,
    },
  },
};
