import Community from '@dew-org/components/community'
import FeaturesGrid from '@dew-org/components/features-grid'
import Hero from '@dew-org/components/hero'
import Navbar from '@dew-org/components/landing/navbar'
import { Section } from '@dew-org/components/primitives'
import landing from '@dew-org/content/landing'
import { levitating } from '@dew-org/utils/animations'
import { Row, Spacer } from '@nextui-org/react'
import { ChevronDown } from 'react-iconly'

const App = () => (
  <>
    <Navbar />
    <Hero />

    <Spacer y={1.5} />

    <Row
      align="center"
      justify="center"
      css={{
        animation: `${levitating} 3s ease infinite`,
      }}
    >
      <ChevronDown size={50} set="bold" />
    </Row>

    <Spacer y={2.5} />

    <Section>
      <FeaturesGrid features={landing.features} />
    </Section>

    <Spacer y={6} />

    <Section>
      <Community />
    </Section>

    <Spacer y={4} />
  </>
)

export default App
