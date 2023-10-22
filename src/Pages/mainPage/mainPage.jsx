// import React from 'react'
import  { LeftSide } from '../../Components/Home/leftSide'
import Posts from '../../Components/Home/Posts';
import AddToFeeds from '../../Components/Home/AddToFeeds';

export const MainPage = () => {
  return (
    <section className='main'>
    <div className='container' >
        <LeftSide/>
        <Posts/>
        <AddToFeeds/>
        </div>
        </section>
  )
};

