import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Demo from './Components/Demo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='flex flex-wrap justify-center gap-4 m-4'>
    <Demo title='Sample Title' price="199" description='Lorem ipsum dolor sit amet consectetur Assumenda veniam quidem reprehenderit commodi, earum hic.' />
    <Demo title='Sample Title' price="199" description='Lorem ipsum dolor sit amet consectetur Assumenda veniam quidem reprehenderit commodi, earum hic.' />
    <Demo title='Sample Title' price="199" description='Lorem ipsum dolor sit amet consectetur Assumenda veniam quidem reprehenderit commodi, earum hic.' />
    <Demo title='Sample Title' price="199" description='Lorem ipsum dolor sit amet consectetur Assumenda veniam quidem reprehenderit commodi, earum hic.' />
    <Demo title='Sample Title' price="199" description='Lorem ipsum dolor sit amet consectetur Assumenda veniam quidem reprehenderit commodi, earum hic.' />
    <Demo title='Sample Title' price="199" description='Lorem ipsum dolor sit amet consectetur Assumenda veniam quidem reprehenderit commodi, earum hic.' />
    <Demo title='Sample Title' price="199" description='Lorem ipsum dolor sit amet consectetur Assumenda veniam quidem reprehenderit commodi, earum hic.' />
    <Demo title='Sample Title' price="199" description='Lorem ipsum dolor sit amet consectetur Assumenda veniam quidem reprehenderit commodi, earum hic.' />
  </div>
);
