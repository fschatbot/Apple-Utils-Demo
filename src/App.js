import { Fragment, Component } from "react";
import { Toaster } from "react-hot-toast";

class App extends Component {
	render() {
		return (
			<Fragment>
				<Toaster position="top-right" />
			</Fragment>
		);
	}
}

export default App;
