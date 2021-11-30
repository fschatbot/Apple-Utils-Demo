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
import { AiOutlineReload } from "react-icons/ai";

class App extends Component {
	state = {
		Volume: 100,
		Brightness: 100,
		LockOrianation: true,
	};
	render() {
		return (
			<div className="Menu">
				<div className="MenuItem" id="Utils">
					<div className="MenuItemIcon">
						<IoIosAirplane />
					</div>
					<div className="MenuItemIcon">
						<IoIosCellular />
					</div>
					<div className="MenuItemIcon">
						<IoIosWifi />
					</div>
					<div className="MenuItemIcon">
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
				onClick={this.toggleLockOrientation}>
				{Locked ? <BiLockAlt /> : <BiLockOpenAlt />}
			</div>
		);
	};
	toggleLockOrientation = () => {
		this.setState({ LockOrianation: !this.state.LockOrianation });
	};
}

export default App;
