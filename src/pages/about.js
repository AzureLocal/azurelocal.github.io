import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About" description="About Azure Local">
      <div style={{
          display: 'flex',
          flexDirection: 'column', // Ensures stacking
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '20px',
          textAlign: 'left', // Centers text within elements
          padding: '20px',
          maxWidth: '800px', // Limits width for better readability
          margin: '0 auto', // Centers the content horizontally
        }}>
        <h1>About</h1>
        <p>
          Azure Local is a community-driven initiative to provide localized resources and information about Azure services.
          Our goal is to make Azure knowledge accessible to everyone, regardless of their location.
          We aim to create a platform where users can share their experiences, insights, and resources related to Azure.
          This includes documentation, blogs, demos, training materials, announcements, and events.
        </p>
        <p>
          Azure Local is built on the principles of collaboration, knowledge sharing, and community engagement.
          We believe that by working together, we can create a more inclusive and supportive environment for Azure users everywhere.
          Whether you are a beginner or an experienced Azure professional, we invite you to join us in this journey.
        </p>
        <p>
          If you have any questions, suggestions, or would like to contribute to Azure Local, please feel free to reach out to us.
          We are always looking for ways to improve and expand our community.
          Your feedback is invaluable to us, and we appreciate your support.
        </p>
        <p>
          Thank you for being a part of Azure Local!
          Together, we can make Azure Local knowledge accessible to everyone.
        </p>
      </div>
    </Layout>
  );
}
