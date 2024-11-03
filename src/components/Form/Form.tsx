import useForm from "../../hooks/useForm";
import styles from "./Form.module.css";

interface FormValues {
	name: string;
	email: string;
	password: string;
	selectOption: string;
	sex: string;
	age: string;
	mobile: string;
}

const initialValues: FormValues = {
	name: "",
	email: "",
	password: "",
	selectOption: "",
	sex: "",
	age: "",
	mobile: "",
};

// Custom validation schema
const validationSchema = {
	name: {
		validate: (value: string) => {
			if (!value) return "Name is required";
			if (value.trim().length < 3) return "Name must be at least 3 characters long";


			return undefined;
		},
	},
	email: {
		validate: (value: string) => {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!value) return "Email is required";
			if (!emailRegex.test(value)) return "Invalid email format";

			return undefined;
		},
	},
	password: {
		validate: (value: string) => {
			if (!value) return "Password is required";
			if (value.length < 6) return "Password must be at least 6 characters";

			return undefined;
		},
	},
	selectOption: {
		validate: (value: string) => {
			if (!value) return "Please select an option";

			return undefined;
		},
	},
	sex: {
		validate: (value: string) => {
			if (!value) return "Sex field is required";

			return undefined;
		},
	},
	age: {
		validate: (value: string) => {
			const age = Number(value);
			if (!value) return "Age is required";
			if (isNaN(age) || age <= 0) return "Age must be a positive number";

			return undefined;
		},
	},
	mobile: {
		validate: (value: string) => {
			const mobileRegex = /^[0-9]{11}$/;
			if (!value) return "Mobile number is required";
			if (!mobileRegex.test(value)) return "Mobile number must be 11 digits";

			return undefined;
		},
	},
};

const Form = () => {
	const { values, handleChange, handleSubmit, errors } = useForm<FormValues>({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<input
				type="text"
				className={styles.input}
				placeholder="Name"
				name="name"
				value={values.name}
				onChange={handleChange}
			/>
			{errors.name && <span className={styles.error}>{errors.name}</span>}

			<input
				type="email"
				name="email"
				className={styles.input}
				placeholder="Email"
				value={values.email}
				onChange={handleChange}
			/>
			{errors.email && <span className={styles.error}>{errors.email}</span>}

			<input
				type="password"
				name="password"
				className={styles.input}
				placeholder="Password"
				value={values.password}
				onChange={handleChange}
			/>
			{errors.password && <span className={styles.error}>{errors.password}</span>}

			<select
				name="selectOption"
				value={values.selectOption}
				className={styles.select}
				onChange={handleChange}
			>
				<option value="">Select Option</option>
				<option value="A">Option A</option>
				<option value="B">Option B</option>
			</select>
			{errors.selectOption && <span className={styles.error}>{errors.selectOption}</span>}

			<div className={styles.radioGroup}>
				<label>
					<input
						type="radio"
						name="sex"
						value="Male"
						checked={values.sex === "Male"}
						onChange={handleChange}
						className={styles.radio}
					/>
					Male
				</label>
				<label>
					<input
						type="radio"
						name="sex"
						value="Female"
						checked={values.sex === "Female"}
						onChange={handleChange}
						className={styles.radio}
					/>
					Female
				</label>
			</div>
			{errors.sex && <span className={styles.error}>{errors.sex}</span>}

			<input
				type="number"
				name="age"
				className={styles.input}
				placeholder="Age"
				value={values.age}
				onChange={handleChange}
			/>
			{errors.age && <span className={styles.error}>{errors.age}</span>}

			<input
				type="tel"
				name="mobile"
				className={styles.input}
				placeholder="Mobile"
				value={values.mobile}
				onChange={handleChange}
			/>
			{errors.mobile && <span className={styles.error}>{errors.mobile}</span>}

			<button className={styles.button}>Submit</button>
		</form>
	);
};

export default Form;
