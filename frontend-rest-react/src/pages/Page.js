import React from 'react';

const Page = ({ data }) => (
  <>
    <h1>Page</h1>
    {
      JSON.stringify(data)
    }
  </>
);

export default Page;
