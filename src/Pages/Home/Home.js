import React from 'react';

function Home({user}) {
  return (
    <section className='main-page'>
      <h2>Welcome {user.name} to the NHL StatReport</h2>
      <figure className='featured-figure'>
      <img referrerPolicy='no-referrer'  alt='snow castle' className='featured-image' src='https://i.imgur.com/GGsJVkN.jpg' />
      <figcaption Snow Castle>
        
      </figcaption>
      </figure>
      
    </section>
  );
}

export default Home;