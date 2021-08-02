import React, { useState } from 'react'

import { PillSwitcher } from 'react-pill-switcher'
import 'react-pill-switcher/dist/index.css'

const App = () => {
	const [val1, setVal1] = useState('-');
	const [val2, setVal2] = useState('-');
	const [val3, setVal3] = useState('-');

	return <div style={{ padding: '3rem' }}>
		<h2>Simple</h2>
		<PillSwitcher options={['One', 'Simple Two', 'Three', 'Last & Least']} name="example01" onChange={(e) => setVal1(e)} />
		<p><small>Selected: {val1}</small></p>

		<br />
		<h2>With Icons and values</h2>
		<PillSwitcher name="example02"
			options={[
				{
					label: 'Lighten the mood',
					icon: <i class="uil uil-sun" style={{ fontSize: '1rem' }}></i>,
					value: 'light'
				},
				{
					label: 'Dark Stuff',
					icon: <i class="uil uil-moon" style={{ fontSize: '1rem' }}></i>,
					value: 'dark'
				}
			]}
			onChange={(e) => setVal2(e)}
		/>
		<p><small>Selected: {val2}</small></p>

		<br />
		<h2>With Custom Colors</h2>
		<PillSwitcher name="example03"
			activeBg="green"
			labelColor="#445bff"
			activeColor="#04ff00"
			options={['One', 'Simple Two', 'Three', 'Last & Least']}
			onChange={(e) => setVal3(e)}
		/>
		<p><small>Selected: {val3}</small></p>

		<br />
		<h2>Full width</h2>
		<PillSwitcher
			isFull
			name="example04"
			options={['One', 'Two', 'Three', 'Four']}
		/>
	</div>
}

export default App
