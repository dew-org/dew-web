import { Card, Col, Row, Spacer, styled, Text } from '@nextui-org/react'
import { FC, ReactNode } from 'react'

type ReportCardProps = {
  title: string | ReactNode
  info: string | ReactNode

  icon?: string
  color?: 'primary' | 'secondary' | 'success'
}

const ReportCardIcon = styled('span', {
  fontSize: '56px !important',
  variants: {
    color: {
      primary: {
        color: '$primary',
      },
      secondary: {
        color: '$secondary',
      },
      success: {
        color: '$success',
      },
    },
  },
})

const ReportCard: FC<ReportCardProps> = ({ title, info, icon, color }) => {
  return (
    <Card variant="bordered">
      <Card.Body css={{ p: 24 }}>
        <Row align="center">
          <Col span={2}>
            <Row justify="flex-start">
              <ReportCardIcon
                color={color}
                className="material-symbols-rounded"
              >
                {icon}
              </ReportCardIcon>
            </Row>
          </Col>

          <Spacer x={1} />

          <Col>
            <Row justify="flex-start">
              <Text size={14} css={{ color: '$accents8' }}>
                {title}
              </Text>
            </Row>
            <Row>
              <Text size={30}>{info}</Text>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default ReportCard
