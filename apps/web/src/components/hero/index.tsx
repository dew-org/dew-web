/* eslint-disable import/order */
import {
  StyledContainer,
  StyledGradientTitle,
  StyledSubtitle,
  StyledTitle,
} from '@dew-org/components/hero/styles'
import { levitating } from '@dew-org/utils/animations'
import {
  Button,
  Col,
  Container,
  Grid,
  Row,
  Spacer,
  Text,
} from '@nextui-org/react'
import NextLink from 'next/link'
import { Buy, Discount, ShieldDone } from 'react-iconly'
import { FormattedMessage } from 'react-intl'

// Hero page for billing app
const Hero = () => {
  return (
    <Container
      alignItems="center"
      as="section"
      className="hero__container"
      css={{
        position: 'relative',
        height: 'calc(84vh - 76px)',
        '@xsMax': {
          height: 'calc(100vh - 64px)',
        },
      }}
      display="flex"
      gap={0}
      justify="space-between"
      lg={true}
      wrap="nowrap"
    >
      <Row
        align="center"
        className="hero__content"
        css={{
          zIndex: '$2',
          '@mdMax': {
            mt: '80px',
            p: '0 8px',
          },
          '@xsMax': {
            mt: '0px',
          },
        }}
        wrap="wrap"
      >
        <Col
          className="hero__left-container"
          css={{
            position: 'relative',
            zIndex: '$2',
            '@md': {
              width: '50%',
            },
            '@mdMax': {
              width: '100%',
            },
          }}
        >
          <StyledTitle css={{ mb: 0 }}>A&nbsp;</StyledTitle>
          <StyledTitle css={{ mb: 0 }}>fastest&nbsp;</StyledTitle>
          <StyledGradientTitle css={{ mb: 0 }}>
            billing&nbsp;
          </StyledGradientTitle>
          <StyledTitle css={{ mb: 0, '@xsMax': { d: 'inline-block' } }}>
            software.
          </StyledTitle>

          <StyledSubtitle>
            <FormattedMessage defaultMessage="A modern, secure, and easy to use billing software." />
          </StyledSubtitle>

          <Spacer y={1.5} />

          <Grid.Container
            gap={0}
            alignItems="center"
            css={{
              '@md': {
                mt: '$lg',
              },
            }}
          >
            <Grid xs={12} sm={3}>
              <NextLink href="/invoices/register" passHref>
                <Button
                  auto
                  rounded
                  size="lg"
                  css={{
                    maxHeight: '$space$14',
                    '@xsMax': {
                      width: '100%',
                      marginBottom: '$8',
                    },
                  }}
                >
                  <FormattedMessage defaultMessage="Get Started" />
                </Button>
              </NextLink>
            </Grid>
          </Grid.Container>
        </Col>
        <Col
          className="hero__right-container"
          css={{
            position: 'relative',
            height: '100%',
            '@mdMax': {
              display: 'none',
            },
          }}
          span={6}
        >
          <StyledContainer>
            <Text
              color="error"
              css={{
                position: 'absolute',
                top: '-200px',
                right: '-100px',
                animation: `${levitating} 10s ease infinite`,
              }}
            >
              <Discount size={150} />
            </Text>

            <Col
              css={{
                position: 'absolute',
                top: '-70%',
                right: '-185%',
                animation: `${levitating} 13s ease infinite`,
              }}
            >
              <Text color="primary">
                <Buy size={150} />
              </Text>
            </Col>
            <Col
              css={{
                position: 'relative',
                cursor: 'pointer',
                top: '50px',
                left: '150px',
                px: '$8',
                animation: `${levitating} 12s ease infinite`,
              }}
            >
              <Text color="success">
                <ShieldDone size={150} />
              </Text>
            </Col>
          </StyledContainer>
        </Col>
      </Row>
    </Container>
  )
}

export default Hero
