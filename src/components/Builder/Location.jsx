import React from 'react';

const Location = () => {
  return (
    <section style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Our Location</h1>
      <div style={{ width: '100%' }}>
        <iframe
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Malet%20St,%20London%20WC1E%207HU,%20United%20Kingdom+(mumbai)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
