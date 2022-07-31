import { createContext } from 'react'

import { ShopContextProps } from '../types/context'

const initialValues: ShopContextProps = {
  shop: undefined,
}

const ShopContext = createContext<ShopContextProps>(initialValues)

export default ShopContext
