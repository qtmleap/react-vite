import { type IntlayerConfig, Locales } from 'intlayer'

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.JAPANESE_JAPAN, Locales.ENGLISH_UNITED_STATES],
    defaultLocale: Locales.JAPANESE_JAPAN
  },
  log: {
    mode: 'verbose'
  }
}

export default config
