import { makeInstaller } from '@noob-ui/utils'
import components from './components'
import '@noob-ui/theme/index.css'

const install = makeInstaller(components)

export * from '@noob-ui/components'
export default install

