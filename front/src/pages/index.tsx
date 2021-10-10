import React, { useEffect } from 'react';
import Header from 'src/components/Header';

const Home = () => {
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      console.log(e.target.scrollingElement.scrollTop);
    });
  }, []);

  return (
    <>
      <Header />
      <p style={{ marginTop: '3rem' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quibusdam consectetur tenetur, asperiores
        officiis repellendus vitae quae est modi, ratione sed eaque molestias praesentium assumenda animi provident
        impedit cupiditate dignissimos!
      </p>
      <p style={{ marginTop: '3rem' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quibusdam consectetur tenetur, asperiores
        officiis repellendus vitae quae est modi, ratione sed eaque molestias praesentium assumenda animi provident
        impedit cupiditate dignissimos!
      </p>
      <p style={{ marginTop: '3rem' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quibusdam consectetur tenetur, asperiores
        officiis repellendus vitae quae est modi, ratione sed eaque molestias praesentium assumenda animi provident
        impedit cupiditate dignissimos!
      </p>
      <p style={{ marginTop: '3rem' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quibusdam consectetur tenetur, asperiores
        officiis repellendus vitae quae est modi, ratione sed eaque molestias praesentium assumenda animi provident
        impedit cupiditate dignissimos!
      </p>
      <p style={{ marginTop: '3rem' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quibusdam consectetur tenetur, asperiores
        officiis repellendus vitae quae est modi, ratione sed eaque molestias praesentium assumenda animi provident
        impedit cupiditate dignissimos!
      </p>
      <p style={{ marginTop: '3rem' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quibusdam consectetur tenetur, asperiores
        officiis repellendus vitae quae est modi, ratione sed eaque molestias praesentium assumenda animi provident
        impedit cupiditate dignissimos!
      </p>
      <p style={{ marginTop: '3rem' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quibusdam consectetur tenetur, asperiores
        officiis repellendus vitae quae est modi, ratione sed eaque molestias praesentium assumenda animi provident
        impedit cupiditate dignissimos!
      </p>
      <p style={{ marginTop: '3rem' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quibusdam consectetur tenetur, asperiores
        officiis repellendus vitae quae est modi, ratione sed eaque molestias praesentium assumenda animi provident
        impedit cupiditate dignissimos!
      </p>
      <p style={{ marginTop: '3rem' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quibusdam consectetur tenetur, asperiores
        officiis repellendus vitae quae est modi, ratione sed eaque molestias praesentium assumenda animi provident
        impedit cupiditate dignissimos!
      </p>
      <p style={{ marginTop: '3rem' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quibusdam consectetur tenetur, asperiores
        officiis repellendus vitae quae est modi, ratione sed eaque molestias praesentium assumenda animi provident
        impedit cupiditate dignissimos!
      </p>
      <p style={{ marginTop: '3rem' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quibusdam consectetur tenetur, asperiores
        officiis repellendus vitae quae est modi, ratione sed eaque molestias praesentium assumenda animi provident
        impedit cupiditate dignissimos!
      </p>
      <p style={{ marginTop: '3rem' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quibusdam consectetur tenetur, asperiores
        officiis repellendus vitae quae est modi, ratione sed eaque molestias praesentium assumenda animi provident
        impedit cupiditate dignissimos!
      </p>
    </>
  );
};

export default Home;
