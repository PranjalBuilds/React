import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Demo from './Components/Demo';

const vegIndianDishes = [
  {
    title: "Paneer Butter Masala",
    description: "A rich and creamy tomato-based curry with soft paneer cubes.",
    price: 250,
    image: "paneer-butter-masala",
    ratings: 4.7,
    votes: 1200
  },
  {
    title: "Masala Dosa",
    description: "Crispy rice crepe stuffed with spiced potato filling, served with chutney and sambar.",
    price: 180,
    image: "masala-dosa",
    ratings: 4.6,
    votes: 1500
  },
  {
    title: "Chole Bhature",
    description: "Spicy chickpea curry served with fluffy deep-fried bread.",
    price: 200,
    image: "chole-bhature",
    ratings: 4.5,
    votes: 1100
  },
  {
    title: "Pav Bhaji",
    description: "A buttery, spicy mashed vegetable curry served with soft buns.",
    price: 160,
    image: "pav-bhaji",
    ratings: 4.8,
    votes: 1400
  },
  {
    title: "Dhokla",
    description: "Soft and spongy fermented chickpea cakes, lightly spiced and tempered.",
    price: 120,
    image: "dhokla",
    ratings: 4.4,
    votes: 900
  },
  {
    title: "Aloo Paratha",
    description: "Stuffed whole wheat flatbread with spiced mashed potatoes, served with butter and curd.",
    price: 150,
    image: "aloo-paratha",
    ratings: 4.7,
    votes: 1300
  },
  {
    title: "Vada Pav",
    description: "Mumbai's famous street snack - spicy potato fritter in a bun, served with chutneys.",
    price: 80,
    image: "vada-pav",
    ratings: 4.6,
    votes: 1600
  },
  {
    title: "Rajma Chawal",
    description: "A comforting dish of kidney beans cooked in a flavorful tomato gravy, served with rice.",
    price: 220,
    image: "rajma-chawal",
    ratings: 4.5,
    votes: 1000
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='flex flex-wrap justify-center gap-4 m-4'>
    {
      vegIndianDishes.map((dish) => (
        <Demo title={dish.title} description={dish.description} price={dish.price} ratings={dish.ratings} />
      ))
    }
  </div>
);
