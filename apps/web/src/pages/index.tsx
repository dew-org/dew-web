import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import DashboardLayout from '@dew-org/layouts/dashboard'
import withLayout from '@dew-org/utils/hocs/with-layout'

const App = () => (
  <div>
    <h1>Web</h1>
  </div>
)

export default withLayout(withPageAuthRequired(App), DashboardLayout)
