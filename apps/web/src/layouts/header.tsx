import withDefaults from '@dew-org/utils/with-defaults'
import { useTheme } from '@nextui-org/react'
import Head from 'next/head'
import { FC } from 'react'

type Props = {
  title?: string
  description?: string
  image?: string
  url?: string
}

export const TWITTER_USER_NAME = '@dew_devs'
export const SITE_URL = 'https://deworg.vercel.app/'

const defaultProps = {
  description: 'A modern, secure, and easy to use billing software.',
}

const Header: FC<Props> = ({ title, description, image, url }) => {
  const { theme, isDark } = useTheme()

  const pageTitle = title ? `${title} | Dew` : 'Dew'

  return (
    <Head>
      <title>{pageTitle}</title>

      <meta name="twitter:site" content={TWITTER_USER_NAME} />

      {image && (
        <meta
          property="og:image"
          content={image.startsWith('https://') ? image : `${SITE_URL}${image}`}
        />
      )}

      <meta property="og:title" content={pageTitle} key="title" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />

      <meta
        name="msapplication-TileColor"
        content={
          isDark ? theme?.colors?.black?.value : theme?.colors?.white?.value
        }
      />
      <meta
        name="theme-color"
        content={
          isDark ? theme?.colors?.black?.value : theme?.colors?.white?.value
        }
      />
      <meta
        name="viewport"
        key="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
      />
    </Head>
  )
}

export default withDefaults(Header, defaultProps)
