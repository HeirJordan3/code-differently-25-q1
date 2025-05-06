import './Home.scss';
import React from 'react';



import ProgramList from '../../components/ProgramSection/ProgramList';





export const Home: React.FC = () => {
  const programData = [
    {
      title: 'Swine Short Loin',
      description:
        'Swine short loin burgdoggen ball tip, shank ham hock bacon. Picanha strip steak pork...',
    },
    {
      title: 'Bacon Ipsum',
      description:
        'Bacon ipsum dolor amet leberkas chuck biltong pork loin sirloin...',
    },
    {
      title: 'Picanha Swine Jowl',
      description:
        'Picanha swine jowl meatball boudin pastrami bresaola fatback...',
    },
    {
      title: 'Kevin Chicken T-Bone',
      description:
        'Kevin chicken t-bone spare ribs shankle bacon drumstick kielbasa...',
    },
  ];

  return (
    <article>
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2 className="hero-title">
            Together we can move the needle of{' '}
            <em className="highlight">diversity in tech.</em>
          </h2>
          <div className="hero-text">
            <span>Code Differently</span> provides hands on training and
            education through coding classes that gives participants the
            technical and cognitive skills they need to excel in
            technology-driven workplaces.
          </div>
        </div>
      </section>
      <section className="programs-section">
        <h2>
          Our <em className="highlight">Programs</em>
        </h2>
        <ProgramList programs={programData} />
      </section>
    </article>
  );
};