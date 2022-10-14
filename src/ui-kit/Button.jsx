import clsx from 'clsx';

export default function Link(props) {
	const { children, className, ...rest } = props;
	const classes = clsx('ui-link', className);

	return (
		<a className={classes} {...rest}>
			{children}
		</a>
	);
}

// import clsx from 'clsx';

// export default function Button({ className, children, ...rest }) {
// 	const classes = clsx(className, 'ui-button');

// 	return (
// 		<button className={classes} {...rest}>
// 			{children}
// 		</button>
// 	);
// }
