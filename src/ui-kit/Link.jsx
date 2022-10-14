import clsx from 'clsx';

export default function Link({ className, children, ...rest }) {
	const classes = clsx('ui-link', className);

	return (
		<a className={classes} {...rest}>
			{children}
		</a>
	);
}
