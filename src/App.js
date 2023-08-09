import { useState } from 'react';
import { RatingContext } from './Contexts/RatingContext';
import RatingCard from './Components/RatingCard'
import ThankyouCard from './Components/ThankyouCard'

function App() {
	const [hasRating, setHasRating] = useState(false);
	const [ratingValue, setRatingValue] = useState('');
	const ratingData = { hasRating, setHasRating, ratingValue, setRatingValue };
	
	return (
		<div className="App">
			<RatingContext.Provider value={ratingData}>
				{!hasRating ? <RatingCard /> : <ThankyouCard />}				
			</RatingContext.Provider>
			<div class="attribution">
				Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
				Coded by <a href="https://www.frontendmentor.io/profile/nuria1110">Nuria Torres</a>.
			</div>
		</div>
	);
};

export default App;



