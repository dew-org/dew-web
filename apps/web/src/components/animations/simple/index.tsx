import { motion } from 'framer-motion'
import { FC, PropsWithChildren } from 'react'

type Props = {}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 200, y: 0 },
}

const SimpleAnimation: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <motion.section
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
    >
      {children}
    </motion.section>
  )
}

export default SimpleAnimation
