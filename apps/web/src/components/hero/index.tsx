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
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import { Buy, Discount, ShieldDone } from 'react-iconly'

// Hero page for billing app
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container
        lg
        display="flex"
        alignItems="center"
        justify="space-between"
        wrap="nowrap"
        gap={0}
        as="section"
        css={{
          position: 'relative',
          height: 'calc(84vh - 76px)',
          '@xsMax': {
            height: 'calc(100vh - 64px)',
          },
        }}
      >
        <Row
          align="center"
          wrap="wrap"
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
        >
          <Col
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
            <StyledTitle css={{ mb: 0 }}>A fastest&nbsp;</StyledTitle>
            <StyledGradientTitle>billing&nbsp;</StyledGradientTitle>
            <StyledTitle>software.</StyledTitle>

            <StyledSubtitle>
              A modern, secure, and easy to use billing software.
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
                <NextLink href="/api/auth/login" passHref>
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
                    Get Started
                  </Button>
                </NextLink>
              </Grid>
            </Grid.Container>
          </Col>
          <Col
            span={6}
            css={{
              position: 'relative',
              height: '100%',
              '@mdMax': {
                display: 'none',
              },
            }}
          >
            <StyledContainer>
              <Col
                css={{
                  position: 'absolute',
                  top: '-100px',
                  right: '-100px',
                  animation: `${levitating} 10s ease infinite`,
                }}
              >
                <Text color="error">
                  <Discount size={150} />
                </Text>
              </Col>
              <Col
                css={{
                  position: 'absolute',
                  top: '-70%',
                  right: '-175%',
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
                  left: '200px',
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
    </motion.div>
  )
}

export default Hero
