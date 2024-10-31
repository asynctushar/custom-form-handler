import { ChangeEvent, FormEvent, useState } from "react";

interface UseFormProps<T> {
	initialValues: T;
	onSubmit: (values: T) => void;
}

const useForm = <T extends Record<string, any>>({ initialValues, onSubmit }: UseFormProps<T>) => {
	const [values, setValues] = useState<T>(initialValues);

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit(values);
	};

	return { values, handleChange, handleSubmit };
};

export default useForm;
