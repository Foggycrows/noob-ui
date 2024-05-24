import { makeInstaller } from '@noob-ui/utils'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import components from './components'
import '@noob-ui/theme/index.css'

library.add(fas)
const install = makeInstaller(components)

export * from '@noob-ui/components'
export default install

