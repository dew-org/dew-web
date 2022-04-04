import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { CustomerService } from '@dew-org/customers'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.query

  try {
    const customer = await CustomerService.findById(id as string)
    response.status(200).json(customer)
  } catch (error) {
    if (error.response) {
      response.status(error.response.status).json({
        message: error.response.data.message,
      })
    } else {
      response.status(500).json({ message: error.message })
    }
  }
}

export default withApiAuthRequired(handler)
