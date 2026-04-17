import { joinRelativeURL } from 'ufo'

const APP_CONFIG = {
  baseURL: '/',
  buildAssetsDir: '/_nuxt/',
  cdnURL: '',
}

export const baseURL = () => APP_CONFIG.baseURL

export const buildAssetsDir = () => APP_CONFIG.buildAssetsDir

export const publicAssetsURL = (...path) => {
  const publicBase = APP_CONFIG.cdnURL || APP_CONFIG.baseURL
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase
}

export const buildAssetsURL = (...path) =>
  joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path)

if (import.meta.client) {
  globalThis.__buildAssetsURL = buildAssetsURL
  globalThis.__publicAssetsURL = publicAssetsURL
}
