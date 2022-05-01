import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { CatalogueService } from '@dew-org/catalogue/src/service'
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
    const products = await CatalogueService.fetchAll()
    response.status(200).json(products)
    return
  }

  // Method not allowed
  response.status(405).end()
}

export default withApiAuthRequired(withErrorHandler(handler))
