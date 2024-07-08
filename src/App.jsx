import { Scanner } from "@yudiel/react-qr-scanner";

const App = () => {
	return <Scanner onScan={(result) => console.log(result)} />;
};
export default App;
