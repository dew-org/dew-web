import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { InvoiceService } from '@dew-org/invoices/src/service'
import withBearerToken from '@dew-org/utils/api/auth/with-bearer-token'
import withErrorHandler from '@dew-org/utils/api/with-error-handler'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const { body } = request

    await InvoiceService.save(body)

    response.status(201).json({ message: 'success' })

    return
  }

  if (request.method === 'GET') {
    const { user } = await getSession(request, response)

    const invoices = await InvoiceService.fetchAll(user.sub)

    response.status(200).json(invoices)

    return
  }

  // Method not allowed
  response.status(405).end()
}

export default withApiAuthRequired(withErrorHandler(withBearerToken(handler)))
