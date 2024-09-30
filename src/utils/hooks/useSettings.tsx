import { useState } from 'react'

import { colors } from '../constants/setting'
import type { ISetting } from '../interface/ISetting'

const useSettings = () => {
  const [settings, setSettings] = useState<ISetting>({
    ...colors[3],
    fontSize: 18,
    lineHeight: 38,
    fontFamily: 'var(--font-inter)',
  })
  return { settings, setSettings }
}

export default useSettings
