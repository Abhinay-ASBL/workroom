/**
 * ASBL Work Room Design Tokens
 * Extracted from Figma Design System
 */

// =============================================================================
// TYPOGRAPHY
// =============================================================================

export const typography = {
  fontFamily: {
    primary: "'Roboto', sans-serif",
    heading: "'Plus Jakarta Sans', sans-serif",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  // Web Typography Scale
  web: {
    h1: {
      fontSize: '48px',
      lineHeight: '40px',
      fontWeight: 400,
    },
    h2: {
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: 400,
    },
    h3: {
      fontSize: '24px',
      lineHeight: '28px',
      fontWeight: 400,
    },
    h4: {
      fontSize: '17px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    body: {
      fontSize: '15px',
      lineHeight: '20px',
      fontWeight: 400,
    },
    small: {
      fontSize: '13px',
      lineHeight: '20px',
      fontWeight: 400,
    },
    caption: {
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: 400,
    },
  },
  // Case Study Typography Scale (larger)
  caseStudy: {
    h1: {
      fontSize: '64px',
      lineHeight: '40px',
      fontWeight: 400,
    },
    h2: {
      fontSize: '48px',
      lineHeight: '40px',
      fontWeight: 400,
    },
    h3: {
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: 400,
    },
    h4: {
      fontSize: '24px',
      lineHeight: '28px',
      fontWeight: 400,
    },
    h5: {
      fontSize: '17px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    body: {
      fontSize: '15px',
      lineHeight: '20px',
      fontWeight: 400,
    },
    small: {
      fontSize: '13px',
      lineHeight: '20px',
      fontWeight: 400,
    },
  },
} as const;

// =============================================================================
// COLORS
// =============================================================================

export const colors = {
  // Black Scale
  black: {
    100: '#000000',
    80: '#333333',
    40: '#666666',
    20: '#999999',
    10: '#CCCCCC',
    5: '#E6E6E6',
  },

  // Primary Colors
  primary: {
    black: '#000000',
    blue: '#524DF6', // Main brand blue/purple
    blue10: 'rgba(82, 77, 246, 0.1)',
    blue40: 'rgba(82, 77, 246, 0.4)',
    blue80: 'rgba(82, 77, 246, 0.8)',
  },

  // Secondary Colors
  secondary: {
    purple: '#6565DB',
    indigo: '#4F46E5',
  },

  // Accent Colors
  accents: {
    yellow: '#F59E0B',
    orange: '#F97316',
    red: '#EF4444',
    green: '#22C55E',
    blue: '#3B82F6',
  },

  // Semantic Colors
  semantic: {
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },

  // Background Colors
  background: {
    primary: '#FFFFFF',
    secondary: '#F9FAFB',
    tertiary: '#F3F4F6',
    dark: '#000000',
    accent: 'rgba(82, 77, 246, 0.1)',
  },

  // Text Colors
  text: {
    primary: '#000000',
    secondary: '#454545',
    tertiary: '#6B7280',
    inverse: '#FFFFFF',
    muted: '#9CA3AF',
  },

  // Border Colors
  border: {
    light: '#E5E7EB',
    medium: '#D1D5DB',
    dark: '#9CA3AF',
  },
} as const;

// =============================================================================
// SPACING
// =============================================================================

export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
} as const;

// =============================================================================
// BORDER RADIUS
// =============================================================================

export const borderRadius = {
  none: '0px',
  sm: '2px',
  md: '4px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  full: '9999px',
} as const;

// =============================================================================
// SHADOWS
// =============================================================================

export const shadows = {
  sm: '0px 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0px 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0px 20px 25px -5px rgba(0, 0, 0, 0.1)',
  navbar: '0px -1px 5.5px 1px rgba(0, 0, 0, 0.25)',
} as const;

// =============================================================================
// Z-INDEX
// =============================================================================

export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

// =============================================================================
// BREAKPOINTS
// =============================================================================

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// =============================================================================
// ICON SIZES
// =============================================================================

export const iconSizes = {
  xs: '16px',
  sm: '20px',
  md: '24px',
  lg: '32px',
  xl: '48px',
} as const;

// Default export
const designTokens = {
  typography,
  colors,
  spacing,
  borderRadius,
  shadows,
  zIndex,
  breakpoints,
  iconSizes,
};

export default designTokens;
