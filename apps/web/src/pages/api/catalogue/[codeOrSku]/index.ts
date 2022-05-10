import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { CatalogueService } from '@dew-org/catalogue'
import withBearerToken from '@dew-org/utils/api/auth/with-bearer-token'
import withErrorHandler from '@dew-org/utils/api/with-error-handler'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { codeOrSku } = request.query

  const product = await CatalogueService.findByCodeOrSku(codeOrSku as string)
  response.status(200).json(product)
}

export default withApiAuthRequired(withErrorHandler(withBearerToken(handler)))
