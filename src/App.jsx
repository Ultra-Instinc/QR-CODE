import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
const App = () => {
	const [qrVal, setQrVal] = useState("");
	return (
		<>
			<Scanner
				onScan={(result) => {
					console.log(result);
					setQrVal(result);
				}}
			/>
			<pre>{JSON.stringify(qrVal, null, 2)}</pre>
		</>
	);
};
export default App;
