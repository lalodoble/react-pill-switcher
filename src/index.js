import React, { useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

// export const ExampleComponent = ({ text }) => {
//   return <div className={styles.test}>miamam Component: {text}</div>
// }

export function PillSwitcher({ name, options, defaultOption, onChange }) {
	// const name = props.name;
	// const options = props.options;
	const [value, setValue] = useState(defaultOption || options[0])

	function onChangeHandle(e) {
		const val = e.target.value
		setValue(val)
		onChange && onChange(val)
	}

	return (
		<div className={styles.pillSwitcher}>
			{options.map((opt, i) => {
				const id = name + '-' + i
				return (
					<div
						className={classNames(styles.switcher__tab, { [styles.active] : value === opt })}
					>
						<label htmlFor={id} className={styles.switcher__label}>
							{opt}
						</label>
						<input
							type='radio'
							name={name}
							id={id}
							value={opt}
							className={styles.switcher__input}
							onChange={(e) => onChangeHandle(e)}
						/>
					</div>
				)
			})}
		</div>
	)
}
