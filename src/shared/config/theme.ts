import { theme as antdTheme } from 'antd'
import type { ThemeConfig } from 'antd'

export const palette = {
  black02: '#6A6572',
  black03: '#908B96',
  black04: '#B4B2BA',
  black05: '#D9D8DB',
  black06: '#ECEBED',
  black07: '#F2F1F2',
  black100: '#443E4F',
  white100: '#ffffff',
  gray100: '#F9F9F9',
  yellow100: '#F4B14B',
  yellow02: '#F6C77F',
  red100: '#D95245',
  red02: '#E97F75',
  red03: '#EF9F98',
  red07: '#FCEFEE',
  green100: '#739648',
  green07: '#F1F4ED',
}

const toCssVarName = (key: string) => `--${key}`

export const applyPaletteCssVariables = () => {
  if (typeof document === 'undefined') return

  const root = document.documentElement

  Object.entries(palette).forEach(([key, value]) => {
    root.style.setProperty(toCssVarName(key), value)
  })
}

export const appTheme: ThemeConfig = {
  algorithm: antdTheme.defaultAlgorithm,
  token: {
    colorPrimary: palette.black100,
    colorPrimaryHover: palette.black03,
    colorPrimaryActive: palette.black02,
    colorText: palette.black100,
    colorTextPlaceholder: palette.black04,
    colorTextDisabled: palette.black05,
    colorTextTertiary: palette.black02,
    colorBorder: palette.black05,
    colorBgContainer: palette.white100,
    colorBgContainerDisabled: palette.black07,
    colorError: palette.red03,
    colorErrorBorderHover: palette.red03,
    fontFamily: "Golos Text, 'Segoe UI', sans-serif",
    fontWeightStrong: 500,
    fontSizeHeading1: 26,
    lineHeightHeading1: 34 / 26,
    fontSizeHeading2: 24,
    lineHeightHeading2: 32 / 24,
    fontSizeHeading3: 20,
    lineHeightHeading3: 26 / 20,
    lineHeight: 20 / 14,
    borderRadius: 10,
    controlHeight: 44,
    colorLink: palette.black100,
  },
  components: {
    Input: {
      colorBorder: palette.black05,
      colorTextPlaceholder: palette.black04,
      hoverBorderColor: palette.black04,
      activeBorderColor: palette.yellow02,
      activeShadow: 'none',
      controlHeight: 40,
      controlHeightLG: 48,
      borderRadius: 8,
      borderRadiusLG: 8,
    },
    DatePicker: {
      controlHeightLG: 48,
    },
    Form: {
      labelColor: palette.black03,
      labelFontSize: 14,
      labelHeight: 20,
      verticalLabelPadding: '0 0 4px',
    },
    Typography: {
      titleMarginTop: 0,
      titleMarginBottom: 0,
    },
    Button: {
      colorPrimary: palette.black100,
      colorPrimaryHover: palette.black03,
      colorPrimaryActive: palette.black02,
      primaryColor: palette.white100,
      defaultShadow: 'none',
      primaryShadow: 'none',
      fontWeight: 500,
      contentFontSize: 14,
      contentFontSizeLG: 14,
      contentLineHeight: 20 / 14,
      contentLineHeightLG: 20 / 14,
      colorBgContainerDisabled: palette.black07,
      colorTextDisabled: palette.black04,
      borderColorDisabled: 'transparent',
      controlHeight: 40,
      controlHeightLG: 48,
      borderRadius: 8,
      borderRadiusLG: 10,
      defaultGhostColor: palette.black100,
      defaultGhostBorderColor: palette.black06,
    },
    Checkbox: {
      colorPrimary: palette.yellow100,
      colorPrimaryHover: palette.yellow100,
      controlInteractiveSize: 24,
      borderRadiusSM: 8,
    },
    Alert: {
      paddingContentVerticalSM: 12,
      lineHeight: 20 / 14,
    },
    Steps: {
      colorPrimary: palette.yellow100,
      colorSplit: palette.black06,
      colorTextLabel: palette.white100,
      iconFontSize: 16,
      colorText: palette.yellow100,
    },
  },
}
