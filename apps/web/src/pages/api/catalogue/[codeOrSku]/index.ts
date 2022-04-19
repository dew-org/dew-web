import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { CatalogueService } from '@dew-org/catalogue'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { codeOrSku } = request.query

  try {
    const product = await CatalogueService.findByCodeOrSku(codeOrSku as string)
    response.status(200).json(product)
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
