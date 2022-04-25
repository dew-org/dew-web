import { motion } from 'framer-motion'
import { FC, PropsWithChildren } from 'react'

type Props = {}

const SimpleAnimation: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      {children}
    </motion.div>
  )
}

export default SimpleAnimation
