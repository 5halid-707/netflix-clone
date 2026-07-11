import { useRef } from 'react'
import { Link } from 'react-router-dom'

const categories = {
  popular: [
    { id: 1, name: 'Inception', seed: 10 },
    { id: 2, name: 'The Dark Knight', seed: 20 },
    { id: 3, name: 'Interstellar', seed: 30 },
    { id: 4, name: 'Avengers: Endgame', seed: 40 },
    { id: 5, name: 'Spider-Man', seed: 50 },
    { id: 6, name: 'Joker', seed: 60 },
    { id: 7, name: 'Dune', seed: 70 },
    { id: 8, name: 'Avatar', seed: 80 },
    { id: 9, name: 'Titanic', seed: 90 },
    { id: 10, name: 'Gladiator', seed: 100 },
    { id: 11, name: 'The Matrix', seed: 110 },
    { id: 12, name: 'Frozen', seed: 120 },
  ],
  trending: [
    { id: 13, name: 'Oppenheimer', seed: 130 },
    { id: 14, name: 'Barbie', seed: 140 },
    { id: 15, name: 'The Last of Us', seed: 150 },
    { id: 16, name: 'Wednesday', seed: 160 },
    { id: 17, name: 'Stranger Things', seed: 170 },
    { id: 18, name: 'Squid Game', seed: 180 },
    { id: 19, name: 'The Boys', seed: 190 },
    { id: 20, name: 'House of Dragon', seed: 200 },
    { id: 21, name: 'The Witcher', seed: 210 },
    { id: 22, name: 'Arcane', seed: 220 },
    { id: 23, name: 'One Piece', seed: 230 },
    { id: 24, name: 'Fallout', seed: 240 },
  ],
  topRated: [
    { id: 25, name: 'Breaking Bad', seed: 250 },
    { id: 26, name: 'Game of Thrones', seed: 260 },
    { id: 27, name: 'The Crown', seed: 270 },
    { id: 28, name: 'Dark', seed: 280 },
    { id: 29, name: 'Money Heist', seed: 290 },
    { id: 30, name: 'Peaky Blinders', seed: 300 },
    { id: 31, name: 'The Mandalorian', seed: 310 },
    { id: 32, name: 'Succession', seed: 320 },
    { id: 33, name: 'The Bear', seed: 330 },
    { id: 34, name: 'Sherlock', seed: 340 },
    { id: 35, name: 'Narcos', seed: 350 },
    { id: 36, name: 'The Office', seed: 360 },
  ],
  action: [
    { id: 37, name: 'John Wick', seed: 370 },
    { id: 38, name: 'Mad Max', seed: 380 },
    { id: 39, name: 'Die Hard', seed: 390 },
    { id: 40, name: 'Mission Impossible', seed: 400 },
    { id: 41, name: 'The Raid', seed: 410 },
    { id: 42, name: 'Predator', seed: 420 },
    { id: 43, name: 'Terminator', seed: 430 },
    { id: 44, name: 'Extraction', seed: 440 },
    { id: 45, name: 'Atomic Blonde', seed: 450 },
    { id: 46, name: 'Nobody', seed: 460 },
    { id: 47, name: 'The Equalizer', seed: 470 },
    { id: 48, name: 'Taken', seed: 480 },
  ],
}

const categoryMap = {
  'Popular on Netflix': 'popular',
  'Trending Now': 'trending',
  'Top Rated': 'topRated',
  'Action Movies': 'action',
}

function TitleCards({ title }) {
  const scrollRef = useRef(null)
  const key = categoryMap[title] || 'popular'
  const items = categories[key]

  return (
    <div className="title-cards">
      <h2>{title}</h2>
      <div className="card-list" ref={scrollRef}>
        {items.map((card) => (
          <Link to={`/player/${card.id}`} key={card.id} className="card">
            <img src={`https://picsum.photos/seed/${card.seed}/240/360`} alt={card.name} />
            <p>{card.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TitleCards
