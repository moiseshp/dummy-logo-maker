// palette: https://coolors.co/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529
export const baseTheme = {
  icon: {
    size: 24,
  },
  palette: {
    primary: '#212529',
    secondary: '#0033FF',
    accent: '#37003C',
    error: 'red',
    info: '#5D27DB',
    success: '#26DB85',
    warning: '',
    textPrimary: '#343A40',
    textSecondary: '#6C757D',
    disabled: '#ADB5BD',
    lightGray: '#E9ECEF',
    body: '#F8F9FA',
  },
  typography: {
    // Default 100% is 16px. All rem will adapt accordingly if user changes browser font size.
    htmlFontSize: '62.5%',
    fontSize: 16,
    regular: 400,
    bolder: 600,
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
      small: 26,
      medium: 30,
      large: 38,
    },
  },
  mixins: {
    spacing: 8,
    toolbar: {
      minHeight: 50,
    },
  },
};
