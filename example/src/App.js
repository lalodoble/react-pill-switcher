import React from 'react'

import { PillSwitcher } from 'react-pill-switcher'
import 'react-pill-switcher/dist/index.css'

const App = () => {
	return <div style={{padding: '3rem'}}>
		<PillSwitcher options={['One', 'Two', 'Three']} name="example01" />
	</div>
}

export default App
