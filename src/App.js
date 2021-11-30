import { Component } from "react";
import { IoIosAirplane, IoIosCellular, IoIosWifi, IoIosBluetooth } from "react-icons/io";
import { BsFillVolumeMuteFill, BsFillVolumeOffFill, BsFillVolumeDownFill, BsFillVolumeUpFill } from "react-icons/bs";
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
		LockOrianation: false,
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
				<div className="MenuItem" id="LockOrianation">
					<this.LockOrientation Locked={this.state.LockOrianation} />
				</div>
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
					<CgScreenMirror size="5rem" />
					Screen Mirroring
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
		return Locked ? <BiLockAlt /> : <BiLockOpenAlt />;
	};
}

export default App;
