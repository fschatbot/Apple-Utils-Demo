import { Component } from "react";
import { IoIosAirplane, IoIosCellular, IoIosWifi, IoIosBluetooth } from "react-icons/io";
import {
	BsFillVolumeMuteFill,
	BsFillVolumeOffFill,
	BsFillVolumeDownFill,
	BsFillVolumeUpFill,
} from "react-icons/bs";
import { IoIosMoon } from "react-icons/io";
import { IoIosFlashlight, IoIosTimer, IoIosCalculator, IoIosCamera } from "react-icons/io";
import { IoQrCodeOutline } from "react-icons/io5";
import { BsFillBrightnessLowFill, BsFillBrightnessHighFill } from "react-icons/bs";
import { BiLockAlt, BiLockOpenAlt } from "react-icons/bi";
import { CgScreenMirror } from "react-icons/cg";

class App extends Component {
	state = {
		Volume: 100,
		Brightness: 100,
		LockOrianation: true,
		AirplaneMode: false,
		WifiMode: true,
		BluetoothMode: true,
		CellularMode: true,
	};
	render() {
		const { AirplaneMode, WifiMode, BluetoothMode, CellularMode } = this.state;
		return (
			<div className="Menu">
				<div className="MenuItem" id="Utils">
					<div
						className={"MenuItemIcon Airplane" + this.isActive(AirplaneMode)}
						onClick={this.toggleAirplane}>
						<IoIosAirplane />
					</div>
					<div
						className={"MenuItemIcon Cellular" + this.isActive(CellularMode)}
						onClick={this.toggleIconState("CellularMode")}>
						<IoIosCellular />
					</div>
					<div
						className={"MenuItemIcon Wifi" + this.isActive(WifiMode)}
						onClick={this.toggleIconState("WifiMode")}>
						<IoIosWifi />
					</div>
					<div
						className={"MenuItemIcon BlueTooth" + this.isActive(BluetoothMode)}
						onClick={this.toggleIconState("BluetoothMode")}>
						<IoIosBluetooth />
					</div>
				</div>
				<div className="MenuItem" id="MusicPlayer">
					Item 2
				</div>
				<this.LockOrientation Locked={this.state.LockOrianation} />
				<div className="MenuItem" id="NightLight">
					<IoIosMoon />
				</div>
				<div className="MenuItem" id="Brightness">
					<this.Brightness Volume={this.state.Brightness} />
				</div>
				<div className="MenuItem" id="Volume">
					<this.VolumeElem Volume={this.state.Volume} />
				</div>
				<div className="MenuItem" id="ScreenMirroring">
					<CgScreenMirror size="3rem" />
					<label>Screen Mirroring</label>
				</div>
				<div className="MenuItem" id="Flashlight">
					<IoIosFlashlight />
				</div>
				<div className="MenuItem" id="Stopwatch">
					<IoIosTimer />
				</div>
				<div className="MenuItem" id="Calculator">
					<IoIosCalculator />
				</div>
				<div className="MenuItem" id="Camera">
					<IoIosCamera />
				</div>
				<div className="MenuItem" id="ScanQR">
					<IoQrCodeOutline />
				</div>
			</div>
		);
	}

	isActive = (value) => {
		return value ? " Active" : "";
	};

	VolumeElem = ({ Volume = 100 }) => {
		if (Volume >= 66) {
			return <BsFillVolumeUpFill />;
		} else if (Volume >= 33) {
			return <BsFillVolumeDownFill />;
		} else if (Volume > 0) {
			return <BsFillVolumeOffFill />;
		} else {
			return <BsFillVolumeMuteFill />;
		}
	};

	Brightness = ({ Brightness = 100 }) => {
		if (Brightness > 50) {
			return <BsFillBrightnessHighFill />;
		} else {
			return <BsFillBrightnessLowFill />;
		}
	};

	LockOrientation = ({ Locked = false }) => {
		let LockStyle = Locked ? { color: "#fa6366", background: "white" } : {};
		return (
			<div
				className={"MenuItem LockOrianation" + (Locked ? " locked" : "")}
				style={LockStyle}
				onClick={this.toggleState("LockOrianation")}>
				{Locked ? <BiLockAlt /> : <BiLockOpenAlt />}
			</div>
		);
	};

	toggleAirplane = () => {
		if (!this.state.AirplaneMode) {
			this.setState({
				AirplaneMode: true,
				CellularMode: false,
				WifiMode: false,
				BluetoothMode: false,
			});
		} else {
			this.setState({ AirplaneMode: false });
		}
	};
	toggleIconState = (name) => () => {
		this.setState({ AirplaneMode: false, [name]: !this.state.name });
	};

	toggleState = (name) => () => {
		// Make this work
		this.setState({ [name]: !this.state[name] });
	};
}

export default App;