import { StyledCommunityCard } from '@dew-org/components/community/styles'
import { Subtitle, Title } from '@dew-org/components/primitives'
import { Github, Twitter } from '@dew-org/theme/icons'
import withDefaults from '@dew-org/utils/with-defaults'
import { Grid, Row, Spacer, Text } from '@nextui-org/react'
import { FC } from 'react'

type Props = {
  twitter?: string
  github?: string
}

const defaultProps = {
  twitter: 'https://twitter.com/dew_devs',
  github: 'https://github.com/dew-org',
}

const Community: FC<Props> = ({ twitter, github }) => {
  return (
    <Grid.Container justify="center" gap={2} css={{ position: 'relative' }}>
      <Grid xs={12} direction="column" css={{ mb: '$10' }}>
        <Row justify="center">
          <Title css={{ textAlign: 'center' }}>Community</Title>
        </Row>
        <Row justify="center">
          <Subtitle css={{ textAlign: 'center' }}>
            Get involved in our community. Everyone is welcome!
          </Subtitle>
        </Row>
      </Grid>

      <Grid xs={12} sm={6} md={3} justify="center">
        <StyledCommunityCard
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Row justify="flex-start" align="center">
            <Twitter fill="#00ACEE" size={30} />
            <Spacer x={0.4} />
            <Text h5>Twitter</Text>
          </Row>
          <Spacer y={0.5} />
          <Row justify="flex-start" align="center">
            <Text css={{ color: '$accents6', textAlign: 'left' }}>
              For announcements, tips and general information.
            </Text>
          </Row>
        </StyledCommunityCard>
      </Grid>

      <Grid xs={12} sm={6} md={3} justify="center">
        <StyledCommunityCard
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Row justify="flex-start" align="center">
            <Github className="github-icon" fill="#E7E7E7" size={30} />
            <Spacer x={0.4} />
            <Text h5>GitHub</Text>
          </Row>
          <Spacer y={0.5} />
          <Row justify="flex-start" align="center">
            <Text css={{ color: '$accents6' }}>
              For issues, feature requests and contribute.
            </Text>
          </Row>
        </StyledCommunityCard>
      </Grid>
    </Grid.Container>
  )
}

export default withDefaults(Community, defaultProps)
