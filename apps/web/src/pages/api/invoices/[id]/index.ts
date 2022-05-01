import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { InvoiceService } from '@dew-org/invoices/src/service'
import withErrorHandler from '@dew-org/utils/api/with-error-handler'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'GET') {
    const { id } = request.query

    const invoice = await InvoiceService.find(id as string)

    response.status(200).json(invoice)

    return
  }

  // Method not allowed
  response.status(405).end()
}

export default withApiAuthRequired(withErrorHandler(handler))
