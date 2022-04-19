import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const withErrorHandler =
  (handler: NextApiHandler) =>
  async (request: NextApiRequest, response: NextApiResponse) => {
    try {
      await handler(request, response)
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

export default withErrorHandler
