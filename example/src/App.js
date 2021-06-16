import React from 'react'

import { PillSwitcher } from 'react-pill-switcher'
import 'react-pill-switcher/dist/index.css'

const App = () => {
	return <div style={{ padding: '3rem' }}>
		<h2>Simple</h2>
		<PillSwitcher options={['One', 'Simple Two', 'Three', 'Last & Least']} name="example01" />

		<br /> <br />
		<h2>With Icons</h2>
		<PillSwitcher options={[
			{
				label: 'Lighten the mood',
				icon: <i class="uil uil-sun" style={{fontSize: '1rem'}}></i>
			},
			{
				label: 'Dark Stuff',
				icon: <i class="uil uil-moon" style={{fontSize: '1rem'}}></i>
			}
		]} name="example02" />
	</div>
}

export default App
