import React from 'react';

const PalaceSection = () => {
  return (
    <section className="palace-section" style={styles.section}>
      <div style={styles.textContainer}>
        <h2 style={styles.heading}>Take a look to</h2>
        <h2 style={styles.heading}>Our Palace</h2>
        <p style={styles.paragraph}>
          Read more about us: Our Vision, Mission, success, and many more you’ll love.
        </p>
      </div>
      <div style={styles.videoContainer}>
        <video
          style={styles.video}
          src="/video.mp4" // Replace with your actual video URL
          autoPlay
          loop
          muted
        />
      </div>
    </section>
  );
};

const styles = {
  section: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '40px',
    color: '#00114d',
    fontFamily: "'Poppins', sans-serif"
  },
  textContainer: {
    marginBottom: '20px'
  },
  heading: {
    margin: '0',
    fontSize: '2rem',
    fontWeight: 'bold'
  },
  paragraph: {
    margin: '10px 0 20px',
    fontSize: '1rem',
    color: '#555'
  },
  videoContainer: {
    display: 'inline-block',
    width: '100%',
    maxWidth: '1100px',
    borderRadius: '10px',
    overflow: 'hidden'
  },
  video: {
    width: '100%',
    borderRadius: '10px',
    outline: 'none'
  }
};

export default PalaceSection;
