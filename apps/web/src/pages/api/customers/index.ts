import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { CustomerService } from '@dew-org/customers'
import withErrorHandler from '@dew-org/utils/api/with-error-handler'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const { body } = request
    await CustomerService.save(body)
    response.status(201).json({ message: 'Customer saved' })
    return
  }

  // Method not allowed
  response.status(405).end()
}

export default withApiAuthRequired(withErrorHandler(handler))
