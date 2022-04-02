import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { ProductService } from '@dew-org/products'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const { body } = request

    try {
      await ProductService.save(body)
      response.status(201).json({ message: 'Product saved' })
    } catch (error) {
      if (error.response) {
        response.status(error.response.status).json({
          message: error.response.data.message,
        })
      } else {
        response.status(500).json({ message: error.message })
      }
    }

    return
  }

  // Method not allowed
  response.status(405).end()
}

export default withApiAuthRequired(handler)
