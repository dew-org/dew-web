import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { ShopService } from '@dew-org/shops/src'
import withBearerToken from '@dew-org/utils/api/auth/with-bearer-token'
import withErrorHandler from '@dew-org/utils/api/with-error-handler'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const { body } = request

    await ShopService.save(body)

    response.status(201).json({ message: 'success' })

    return
  }

  // Method not allowed
  response.status(405).end()
}

export default withApiAuthRequired(withErrorHandler(withBearerToken(handler)))
