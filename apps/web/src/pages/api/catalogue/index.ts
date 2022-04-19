import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { CatalogueService } from '@dew-org/catalogue/src/service'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
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
  } catch (error) {
    if (error.response) {
      response.status(error.response.status).json({
        message: error.response.data.message,
      })
    } else {
      response.status(500).json({ message: error.message })
    }

    return
  }

  // Method not allowed
  response.status(405).end()
}

export default withApiAuthRequired(handler)
