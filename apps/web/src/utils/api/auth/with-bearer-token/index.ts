import { getAccessToken } from '@auth0/nextjs-auth0'
import { HttpClient } from '@dew-org/shared'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const withBearerToken =
  (handler: NextApiHandler) =>
  async (request: NextApiRequest, response: NextApiResponse) => {
    const { accessToken } = await getAccessToken(request, response)

    if (accessToken) {
      HttpClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    }

    return handler(request, response)
  }

export default withBearerToken
