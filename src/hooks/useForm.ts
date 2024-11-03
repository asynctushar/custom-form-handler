import { ChangeEvent, FormEvent, useState } from "react";

interface ValidationRule<T> {
	validate: (value: T) => string | undefined;
}

interface ValidationSchema {
	[key: string]: ValidationRule<any>;
}

interface UseFormProps<T> {
	initialValues: T;
	onSubmit: (values: T) => void;
	validationSchema?: ValidationSchema;
}

const useForm = <T extends Record<string, any>>({
	initialValues,
	onSubmit,
	validationSchema,
}: UseFormProps<T>) => {
	const [values, setValues] = useState<T>(initialValues);
	const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});

		validateField(name, value);
	};

	const validateField = (name: string, value: any) => {
		if (validationSchema) {
			const rule = validationSchema[name];
			if (rule) {
				const errorMessage = rule.validate(value);
				setErrors((prevErrors) => ({
					...prevErrors,
					[name]: errorMessage,
				}));
			}
		}
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (validationSchema) {
			const validationErrors: Partial<Record<keyof T, string>> = {};

			Object.keys(validationSchema).forEach((key) => {
				const rule = validationSchema[key];
				const errorMessage = rule.validate(values[key]);
				if (errorMessage) {
					validationErrors[key as keyof T] = errorMessage;
				}
			});

			if (Object.keys(validationErrors).length > 0) {
				setErrors(validationErrors);
			} else {
				onSubmit(values);
				setErrors({});
			}
		} else {
			onSubmit(values);
		}
	};

	return { values, handleChange, handleSubmit, errors };
};

export default useForm;
