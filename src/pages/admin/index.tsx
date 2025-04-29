import React from 'react';
import Head from '@docusaurus/Head';

const Admin = () => {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>
      <div id="nc-root" />
    </>
  );
};

export default Admin;