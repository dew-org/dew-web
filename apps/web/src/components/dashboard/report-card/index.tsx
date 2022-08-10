import { Card, Col, Row, styled, Text } from '@nextui-org/react'
import { FC, ReactNode } from 'react'

type ReportCardProps = {
  title: string | ReactNode
  info: string | ReactNode

  icon?: string
  color?: 'primary' | 'secondary' | 'success'
}

const ReportCardIcon = styled('span', {
  fontSize: '70px !important',
  verticalAlignment: 'middle',
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
    <Card>
      <Card.Body css={{ p: 24 }}>
        <Row>
          <Col span={8}>
            <Row>
              <Text b size={14} css={{ color: '$accents8' }}>
                {title}
              </Text>
            </Row>
            <Row>
              <Text b size={30}>
                {info}
              </Text>
            </Row>
          </Col>
          <Col span={4}>
            <Row justify="flex-end">
              <ReportCardIcon
                color={color}
                className="material-symbols-rounded"
              >
                {icon}
              </ReportCardIcon>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default ReportCard
