import { handleAuth, handleLogin } from '@auth0/nextjs-auth0'

export default handleAuth({
  async login(request, response) {
    try {
      await handleLogin(request, response, {
        authorizationParams: {
          audience: process.env.AUTH0_AUDIENCE,
        },
      })
    } catch (error) {
      response.status(error.status || 400).end(error.message)
    }
  },
})
