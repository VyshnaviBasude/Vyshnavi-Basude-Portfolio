import React from 'react';
import resumePdf from '../assests/resume.pdf';

const Resume: React.FC = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <iframe
        src={resumePdf}
        width="80%"
        height="80%"
        style={{ border: 'none' }}
        title="Resume"
      />
    </div>
  );
};

export default Resume;
