export default {
  base: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    gtagId: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
    trailerUrl: process.env.NEXT_PUBLIC_TRAILER_URL,
  },
  donation: {
    paypalClientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    goal: process.env.NEXT_PUBLIC_DONATION_GOAL,
  },
  fauna: {
    url: process.env.NEXT_PUBLIC_FAUNA_URL,
    key: process.env.NEXT_PUBLIC_FAUNA_SECRET,
  },
}
