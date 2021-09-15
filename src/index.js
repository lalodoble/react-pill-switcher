/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'


export function PillSwitcher({
	name,
	options = {
		label: 'Option',
		value: 1
	},
	onChange,
	className = '',
	labelClassName = '',
	labelActiveClassName = '',
	pillClassName = '',
	on = null,
	isFull = false
}) {
	// const name = props.name;
	// const options = props.options;
	const defaultRef = useRef();
	const itemsRef = useRef([]);
	const [defaultValue, setDefaultValue] = useState(typeof options[0] === 'object' ? options[0].value || options[0].label : options[0])
	const [value, setValue] = useState(typeof options[0] === 'object' ? options[0].value || options[0].label : options[0])
	const [sizes, setSizes] = useState()
	const [activeIndex, setActiveIndex] = useState(0);
	const [trigger, setTrigger] = useState(0);

	function addToRef(el) {
		itemsRef.current.push(el);
	}

	useEffect(() => {
		if (itemsRef.current[activeIndex]) {
			setTimeout(() => {
				setSizes({
					width: itemsRef.current[activeIndex].clientWidth,
					height: itemsRef.current[activeIndex].clientHeight,
					left: itemsRef.current[activeIndex].offsetLeft,
					top: itemsRef.current[activeIndex].offsetTop,
					transition: 'none',
				})
			}, 200);
		}

		function handleResize() {
			setTrigger(trigger + 1);
			window.removeEventListener("resize", handleResize);
		}
	
		window.addEventListener("resize", handleResize);
	}, [itemsRef.current, on, trigger])

	useEffect(() => {
	}, [])

	function onChangeHandle(e) {
		const val = e.target.value;
		const id = e.target.id;
		setValue(val);
		onChange && onChange(val);
		setActiveIndex(parseInt(id.substr(id.lastIndexOf('-') + 1)));
	}

	function onClick(e) {
		const active = e.target;
		setSizes({
			width: active.clientWidth,
			height: active.clientHeight,
			left: active.offsetLeft,
			top: active.offsetTop,
		})
	}

	return <div className={classNames('pillSwitcher', { '--full': isFull }, className)}>
		{options.map((opt, i) => {
			const id = name + '-' + i
			const isObject = typeof opt === 'object'
			const actualOption = isObject ? opt.value || opt.label : opt
			// console.log(actualOption + ' - ' + value)
			return (
				<div
					key={i}
					// ref={opt === defaultValue || (isObject && actualOption === defaultValue) ? defaultRef : null}
					ref={addToRef}
					className={classNames('switcher__tab', { 'active': value === actualOption })}
				>
					<label
						htmlFor={id}
						className={classNames('switcher__label', labelClassName, { [labelActiveClassName]: value === actualOption })}
						onClick={onClick}
					>
						{isObject ?
							<div className={classNames('switcher__labelInner')}>
								<span className={classNames('switcher__icon')}>{opt.icon}</span>
								<span className={classNames('switcher__labelText')}>{opt.label}</span>
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
						className={classNames('switcher__input')}
						onChange={(e) => onChangeHandle(e)}
					/>
				</div>
			)
		})}

		<span className={classNames('switcher__bg', pillClassName)} style={{ ...sizes }}></span>
	</div >
}
