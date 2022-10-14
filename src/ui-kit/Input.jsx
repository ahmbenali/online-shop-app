import clsx from 'clsx';

export default function Input({ type = 'text', className, ...rest }) {
	const classes = clsx('ui-textfield', className);

	return <input type={type} className={classes} {...rest} />;
}
