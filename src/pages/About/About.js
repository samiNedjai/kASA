import React from 'react';
import data from '../../data/data.json'
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';

function About() {

	document.title = "kasa- à propos";

	const accordionData = data.AproposAccordion; 
    return (
        <div>
            <Banner/> 
            <div >
        {accordionData.map(({ id, title, content }) => (
          <Collapse key={id} title={title} content={content} />
        ))}
      </div>
        </div>
    );
}

export default About;