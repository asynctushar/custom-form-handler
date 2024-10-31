import styles from "./Form.module.css";

const Form = () => {
	return (
		<form className={styles.form}>
			<input type="text" className={styles.input} placeholder="Username" />
			<input
				type="password"
				name="password"
				className={styles.input}
				placeholder="Password"
			/>
			<input type="email" name="email" className={styles.input} placeholder="Email" />
			<select name="select" className={styles.select}>
				<option value="">Select Option</option>
				<option value="A">Option A</option>
				<option value="B">Option B</option>
			</select>
			<div className={styles.radioGroup}>
				<label>
					<input type="radio" name="sex" value="Male" className={styles.radio} />
					Male
				</label>
				<label>
					<input type="radio" name="sex" value="Female" className={styles.radio} />
					Female
				</label>
			</div>
			<input type="number" name="age" className={styles.input} placeholder="Age" />
			<input type="tel" name="mobile" className={styles.input} placeholder="Mobile" />
			<button className={styles.button}>Submit</button>
		</form>
	);
};

export default Form;
