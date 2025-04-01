import React from 'react';
import Layout from '@theme/Layout';

export default function News() {
  return (
    <Layout title="News" description="Azure Local News and Updates">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}
      >
        <p>
          News and Updates coming soon!
          <br />
        </p>
      </div>
    </Layout>
  );
}
