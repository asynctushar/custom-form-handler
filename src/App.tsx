import styles from "./App.module.css";
import Form from "./components/Form/Form";

const App = () => {
	return (
		<div className={styles.appContainer}>
			<h2 className={styles.heading}>Custom Form</h2>
			<Form />
		</div>
	);
};

export default App;
