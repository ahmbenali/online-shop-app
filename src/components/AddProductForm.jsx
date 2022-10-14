export default function AddProductForm(props) {
	const {
		onFormSubmit,
		onNameChange,
		onDescriptionChange,
		name,
		description,
		validation,
		products,
  } = props;
  
  // console.log('PROPS: ',props);
  

	return (
			<form onSubmit={onFormSubmit} className='add-form'>
				<div>
					<label>
						Name:
						<input
							type='text'
							value={name}
							onChange={onNameChange}
							placeholder='Enter the name'
							className='textfield'
						/>
					</label>
				</div>
				<div>
					<label>
						Description:
						<input
							type='text'
							value={description}
							onChange={onDescriptionChange}
							placeholder='Enter the description'
							className='textfield'
						/>
					</label>
				</div>
				<div className='form-footer'>
					<div className='validation-message'>{validation}</div>
					<input
						type='submit'
						className='btn btn-primary'
						value='Add product'
					/>
				</div>
			</form>
	);
}
