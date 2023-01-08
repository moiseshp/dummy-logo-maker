const STORAGE_KEY = 'DUMMY_LOGO_MAKER';
const initialValue = null;

const storage = {
  get: () => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(STORAGE_KEY);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  },

  set: (payload) => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      }
    } catch (error) {
      // Track errors.
    }
  },

  remove: () => {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      // Track errors.
    }
  },
};

export default storage;
