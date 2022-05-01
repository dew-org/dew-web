import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { CustomerService } from '@dew-org/customers'
import withErrorHandler from '@dew-org/utils/api/with-error-handler'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.query

  const customer = await CustomerService.findById(id as string)
  response.status(200).json(customer)
}

export default withApiAuthRequired(withErrorHandler(handler))
