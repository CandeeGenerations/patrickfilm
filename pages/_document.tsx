import Document, {Html, Head, Main, NextScript} from 'next/document'
import config from '../config'

export default class PatrickFilmDocument extends Document {
  render() {
    const {gtagId, paypalClientId} = config

    return (
      <Html>
        <Head>
          {gtagId && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtagId}', {
                page_path: window.location.pathname,
              });
          `,
                }}
              />
              <script
                src={`https://www.paypal.com/sdk/js?client-id=${paypalClientId}&enable-funding=venmo`}
              />
            </>
          )}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
