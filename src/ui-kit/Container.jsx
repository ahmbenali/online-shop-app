import clsx from 'clsx';

export default function Container({ children, className, ...rest }) {
	const classes = clsx('ui-container', className);

	return <div className={classes}>{children}</div>;
}
