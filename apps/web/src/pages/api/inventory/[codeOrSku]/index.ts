import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { InventoryService } from '@dew-org/inventory'
import withBearerToken from '@dew-org/utils/api/auth/with-bearer-token'
import withErrorHandler from '@dew-org/utils/api/with-error-handler'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { codeOrSku } = request.query

  const productInventory = await InventoryService.findByCodeOrSku(
    codeOrSku as string,
  )
  response.status(200).json(productInventory)
}

export default withApiAuthRequired(withErrorHandler(withBearerToken(handler)))
