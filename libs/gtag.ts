// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
import config from '../config'

export function pageview(url: URL) {
  const {gtagId} = config.base

  if (gtagId) {
    window.gtag('config', gtagId, {
      page_path: url,
    })
  }
}

type GTagEvent = {
  action: string
  category: string
  label?: string
  value?: number
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export function gtagEvent({action, category, label, value}: GTagEvent) {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}
