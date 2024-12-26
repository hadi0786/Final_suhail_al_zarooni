import React from 'react';
import './rewards.css';

const rewards = [
  {
    title: 'World Record',
    award: 'Guinness World Record Holder',
    description: 'Al Zarooni is the first Emirati non-royal awarded a Guinness World Record for his model car collection.',
  },
  {
    title: 'Visionary Award',
    award: 'Expo 2020 Visionary Award',
    description: 'Al Zarooni is the first Emirati non-royal awarded a Guinness World Record for his model car collection.',
  },
  {
    title: 'Visionary Award',
    award: 'Expo 2020 Visionary Award',
    description: 'Al Zarooni is the first Emirati non-royal awarded a Guinness World Record for his model car collection.',
  },
  {
    title: 'Visionary Award',
    award: 'Expo 2020 Visionary Award',
    description: 'Al Zarooni is the first Emirati non-royal awarded a Guinness World Record for his model car collection.',
  },
];

const RewardsSection = () => {
  return (
    <section
      className="rewards-section"
      style={{ backgroundColor: '#00114d', color: '#fff', paddingLeft: '60px' , paddingRight: '60px' , paddingTop: '20px'}}
    >
      <h2 style={{ textAlign: 'left', color: '#fff' }}>Our Rewards</h2>
      <div
        className="rewards-list"
        style={{ paddingLeft: '40px', paddingRight: '40px', margin: '0 auto' }}
      >
        {rewards.map((reward, index) => (
          <div
            key={index}
            className="reward-item"
            style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}
          >
                        <div class="title">
                        <div>
            <h3 style={{ margin: '0', fontSize: '1.2rem' }}>{reward.title}</h3>
            </div>
            <div>
            <h4
              style={{
                margin: '5px 0',
                fontSize: '1rem',
                fontWeight: 'bold',
              }}
            >
              {reward.award}
            </h4>
            <p style={{ margin: '0', fontSize: '0.9rem' }}>
              {reward.description}
            </p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RewardsSection;
