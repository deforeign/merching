import './merchandise.css'
import { useState } from 'react';
import {RazorpayButton,RazorpayButton3,RazorpayButton4} from './payment.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import SizeChart from './sizechart.jsx'

import ocImage from '../../assets/merchandise/oc_remove.png';
import hcImage from '../../assets/merchandise/hc_remove.png';
import ccImage from '../../assets/merchandise/cc_remove.png';
import exeImage from '../../assets/merchandise/exe_remove.png';

function Merchandise() {

	const styles = {
		container: {
		  fontFamily: "Arial, sans-serif",
		  marginTop: "20px",
		},

		counter: {
		  display: "flex",
		  alignItems: "center",
		  gap: "10px",
		},

		button: {
		  backgroundColor: "white",
		  color: "black",
		  border: "1px solid #ccc",
		  borderRadius: "4px",
		  padding: "5px 10px",
		  fontSize: "18px",
		  cursor: "pointer",
		},

		value: {
		  fontSize: "25px",
		  fontWeight: "bold",
		},

		total: {
		  marginTop: "20px",
		  fontSize: "18px",
		  fontWeight: "bold",
		},
		
		amount: {
		  color: "white",
		},
	  };


	const [count, setCount] = useState(1);
	const pricePerItem = 100;

	const names = {
		1: "Overall Coordinator",
		2: "Head Coordinator",
		3: "Core Coordinator",
		4: "Executives"
	};

	const increment = () => setCount(count < 4 ? count + 1 : 4);
	const decrement = () => setCount(count > 1 ? count - 1 : 1); 

	const buttonMap = {
		1: <RazorpayButton />,
		2: <RazorpayButton />,
		3: <RazorpayButton3 />,
		4: <RazorpayButton4 />
	  };

	  const imgarray = {
		1: ocImage,
		2: hcImage,
		3: ccImage,
		4: exeImage,
	  };
	  
	
	return (
		<>
			<div className="cu-main">
				<div class="heading_merch">TEAM MERCHANDISE</div>
				<div class="cu_main">
					<div class="cu_container">
						<div className="mid-section">
							<img src={imgarray[count]} alt="Merch 1" class="cu-main-image" id="1"  />
							<div className="disc">Choose Your Merchandise according to your position.</div>

							<div class="plus" style={styles.counter}>
								<button class="sign-left" onClick={decrement} style={styles.button}>
									<FontAwesomeIcon icon={faArrowLeft} />
								</button>

								<span class="team-name lol" style={styles.value}>{names[count]}</span>

								<button class="sign-right" onClick={increment} style={styles.button}>
									<FontAwesomeIcon icon={faArrowRight} />
								</button>
							</div>
						</div>
						
						<div class="cu-right-section">
							<p class="cu-maintext">SAMAR 2025 MERCH</p>
							<p class="cu-subtext">Fuel your passion for the game!</p>
							<div class="cu-special-offer">
								<p class="cu-special-text">It's all about celebrating your team. <br />Wear your pride, live the action!</p>
							</div>
								<div className="samar-sizes">
									<p className="sizehead">Size Chart</p>
									<SizeChart />
								</div>
								
								<div  style={styles.container}>
									<div class="plus" style={styles.total}>
										<span class="lol">Total Amount: </span>
										<span class="lola" style={styles.amount}>{499}/-</span>
									</div>
								</div>
								<div class="merch-btn">{buttonMap[count]}</div>
								
								<p class="cu-disclaimer"><span class="lol">Disclaimer:</span> Delivery Available Only in Raipur.</p>
							</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Merchandise;