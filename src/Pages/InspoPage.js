import React, { useRef } from 'react';
import Trend from '../components/Trend';
import { inspo } from '../data/inspo-data';
import { useInspoEffects } from '../components/hooks/useInspoEffects';
import '../css/style.css';

const InspoPage = () => {
	const contentRef = useRef(null);
	useInspoEffects(contentRef, inspo);

	return (
		<div className='rm' id='index'>
			{/* Header content */}
			<div className='content' ref={contentRef}>
				<section className='grid'>
					{inspo.map((trend) => (
						<Trend key={trend.trendId} trend={trend} />
					))}
				</section>
			</div>
			{/* Footer content */}
		</div>
	);
};

export default InspoPage;
