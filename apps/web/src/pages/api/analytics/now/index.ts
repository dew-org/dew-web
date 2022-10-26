import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { AnalyticsService } from '@dew-org/analytics'
import withBearerToken from '@dew-org/utils/api/auth/with-bearer-token'
import withErrorHandler from '@dew-org/utils/api/with-error-handler'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'GET') {
    const { user } = await getSession(request, response)

    const analytics = await AnalyticsService.fetchNow(user.sub)

    response.status(200).json(analytics)
    return
  }

  // Method not allowed
  response.status(405).end()
}

export default withApiAuthRequired(withErrorHandler(withBearerToken(handler)))
