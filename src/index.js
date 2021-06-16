import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

// export const ExampleComponent = ({ text }) => {
//   return <div className={styles.test}>miamam Component: {text}</div>
// }


export function PillSwitcher({ name, options, onChange }) {
	// const name = props.name;
	// const options = props.options;
	const defaultRef = useRef();
	const [defaultValue, setDefaultValue] = useState(typeof options[0] === 'object' ? options[0].label : options[0])
	const [value, setValue] = useState(typeof options[0] === 'object' ? options[0].label : options[0])
	const [sizes, setSizes] = useState()

	useEffect(() => {
		if(defaultRef.current) {
			setSizes({
				width: defaultRef.current.clientWidth,
				height: defaultRef.current.clientHeight,
				left: defaultRef.current.offsetLeft,
				top: defaultRef.current.offsetTop,
				transition: 'none',
			})
		}
	}, [defaultRef.current])

	function onChangeHandle(e) {
		const val = e.target.value
		setValue(val)
		onChange && onChange(val)

	}

	function onClick(e) {
		let active = e.target;
		setSizes({
			width: active.clientWidth,
			height: active.clientHeight,
			left: active.offsetLeft,
			top: active.offsetTop,
		})
	}

	return <div className={styles.pillSwitcher}>
		{options.map((opt, i) => {
			const id = name + '-' + i
			const isObject = typeof opt === 'object' ? true : false
			const actualOption = isObject ? opt.label : opt
			// console.log(actualOption + ' - ' + value)
			return (
				<div
					key={i}
					ref={opt === defaultValue  || (isObject && opt.label === defaultValue) ? defaultRef : null}
					className={classNames(styles.switcher__tab, { [styles.active]: value === actualOption })}
				>
					<label htmlFor={id} className={styles.switcher__label} onClick={onClick}>
						{isObject ?
						<div className={styles.switcher__labelInner}>
							<span className={styles.switcher__icon}>{opt.icon}</span>
							<span className={styles.switcher__labelText}>{opt.label}</span>
						</div>
						:
						opt
						}
					</label>
					<input
						type='radio'
						name={name}
						id={id}
						value={actualOption}
						className={styles.switcher__input}
						onChange={(e) => onChangeHandle(e)}
					/>
				</div>
			)
		})}

		<span className={styles.switcher__bg} style={sizes}></span>
	</div>
}
