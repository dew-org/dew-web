import { useUser } from '@auth0/nextjs-auth0'
import {
  Link,
  Loading,
  Row,
  Spacer,
  Text,
  Tooltip,
  User,
} from '@nextui-org/react'
import { useMemo } from 'react'
import { FormattedMessage } from 'react-intl'

const AccountAvatar = () => {
  const { user, isLoading } = useUser()

  const tooltipContent = useMemo(
    () => (
      <>
        <Text h5>{user?.name}</Text>
        <Text small>{user?.email}</Text>

        <Spacer y={1} />

        <Row justify="center">
          <Link color="error" href="/api/auth/logout" block>
            <FormattedMessage defaultMessage="Logout" />
          </Link>
        </Row>
      </>
    ),
    [user],
  )

  return (
    <>
      {isLoading && <Loading />}

      {user && (
        <Tooltip
          trigger="click"
          placement="bottomEnd"
          content={tooltipContent}
          shadow
          css={{ zIndex: '$max' }}
        >
          <User name={user.name} src={user.picture} pointer />
        </Tooltip>
      )}
    </>
  )
}

export default AccountAvatar
