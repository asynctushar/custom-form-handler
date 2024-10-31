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

const Form = () => {
	const { values, handleChange, handleSubmit } = useForm<FormValues>({
		initialValues,
		onSubmit: (values: FormValues) => {
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
			<input
				type="email"
				name="email"
				className={styles.input}
				placeholder="Email"
				value={values.email}
				onChange={handleChange}
			/>
			<input
				type="password"
				name="password"
				className={styles.input}
				placeholder="Password"
				value={values.password}
				onChange={handleChange}
			/>
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
			<input
				type="number"
				name="age"
				className={styles.input}
				placeholder="Age"
				value={values.age}
				onChange={handleChange}
			/>
			<input
				type="tel"
				name="mobile"
				className={styles.input}
				placeholder="Mobile"
				value={values.mobile}
				onChange={handleChange}
			/>
			<button className={styles.button}>Submit</button>
		</form>
	);
};

export default Form;
