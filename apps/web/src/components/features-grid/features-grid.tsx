import { FeatureItem } from '@dew-org/components/features-grid/styles'
import withDefaults from '@dew-org/utils/with-defaults'
import { CSS, Grid, GridProps, Row, Text } from '@nextui-org/react'
import { FC, ReactNode } from 'react'

export type Feature = {
  title: string
  description: string
  icon: ReactNode
}

type Props = {
  features: Feature[]
  xs?: GridProps['xs']
  sm?: GridProps['sm']
  lg?: GridProps['lg']
  css?: CSS
  itemCss?: CSS
}

export type FeaturesGridProps = Props & GridProps

const defaultProps = {
  xs: 12,
  sm: 4,
  lg: 3,
}

const FeaturesGrid: FC<FeaturesGridProps> = ({
  features,
  xs,
  sm,
  lg,
  css,
  itemCss,
  ...props
}) => {
  return (
    <Grid.Container css={{ px: 0, ...(css as any) }} gap={2} {...props}>
      {features.map((feat, index) => (
        <Grid key={`${feat.title}_${index}`} xs={xs} sm={sm} lg={lg}>
          <FeatureItem css={itemCss}>
            <Row align="center">
              <div className="icon-wrapper">{feat.icon}</div>
              <Text
                className="feature-title"
                css={{
                  my: 0,
                  fontSize: '1.1rem',
                  fontWeight: '$semibold',
                  ml: '$4',
                }}
              >
                {feat.title}
              </Text>
            </Row>

            <Row align="center" css={{ px: '$2', pt: '$4', pb: '$2' }}>
              <Text
                className="feature-description"
                css={{ color: '$accents7' }}
              >
                {feat.description}
              </Text>
            </Row>
          </FeatureItem>
        </Grid>
      ))}
    </Grid.Container>
  )
}

export default withDefaults(FeaturesGrid, defaultProps)
