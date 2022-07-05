import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { CatalogueService } from '@dew-org/catalogue/src/service'
import withBearerToken from '@dew-org/utils/api/auth/with-bearer-token'
import withErrorHandler from '@dew-org/utils/api/with-error-handler'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const { body } = request
    await CatalogueService.save(body)
    response.status(201).json({ message: 'success' })
    return
  }

  if (request.method === 'GET') {
    const { user } = await getSession(request, response)

    const products = await CatalogueService.fetchAll(user.sub)
    response.status(200).json(products)
    return
  }

  // Method not allowed
  response.status(405).end()
}

export default withApiAuthRequired(withErrorHandler(withBearerToken(handler)))
