import React, { useState } from 'react'

import { PillSwitcher } from 'react-pill-switcher'
import 'react-pill-switcher/styles/styles.scss'
import './index.css'

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
					icon: <i className="uil uil-sun" style={{ fontSize: '1rem' }}></i>,
					value: 'light'
				},
				{
					label: 'Dark Stuff',
					icon: <i className="uil uil-moon" style={{ fontSize: '1rem' }}></i>,
					value: 'dark'
				}
			]}
			onChange={(e) => setVal2(e)}
		/>
		<p><small>Selected: {val2}</small></p>

		<br />
		<h2>With Custom Styles</h2>
		<PillSwitcher name="example03"
			className="mySwitcher"
			labelClassName="myLabel"
			labelActiveClassName="myLabel2"
			pillClassName="myPill"
			options={['One', 'Simple Two', 'Three', 'Last & Least']}
			onChange={(e) => setVal3(e)}
		/>
		<p><small>Selected: {val3}</small></p>

		<br />
		<h2>Full width</h2>
		<PillSwitcher
			isFull
			name="example04"
			options={['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven']}
		/>
	</div>
}

export default App
