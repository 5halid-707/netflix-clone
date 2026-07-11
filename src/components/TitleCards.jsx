import { useRef } from 'react'
import { Link } from 'react-router-dom'

const cardsData = [
  { id: 1, image: 'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgI18F2.jpg', name: 'Inception' },
  { id: 2, image: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg', name: 'The Dark Knight' },
  { id: 3, image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911BFVr8I1W4m4z.jpg', name: 'Interstellar' },
  { id: 4, image: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg', name: 'Avengers' },
  { id: 5, image: 'https://image.tmdb.org/t/p/w500/6Lw54zxL6J8Ck3X5CJ7Gq3Qm5k.jpg', name: 'Spider-Man' },
  { id: 6, image: 'https://image.tmdb.org/t/p/w500/sy3e8g1S7J7k6k0g6qo7o7j7l7.jpg', name: 'Joker' },
  { id: 7, image: 'https://image.tmdb.org/t/p/w500/3V4kLQg0kSqPL1H6m1Q6j6k6l7.jpg', name: 'Dune' },
  { id: 8, image: 'https://image.tmdb.org/t/p/w500/6Lw54zxL6J8Ck3X5CJ7Gq3Qm5k.jpg', name: 'Avatar' },
  { id: 9, image: 'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgI18F2.jpg', name: 'Titanic' },
  { id: 10, image: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg', name: 'Gladiator' },
  { id: 11, image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911BFVr8I1W4m4z.jpg', name: 'The Matrix' },
  { id: 12, image: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg', name: 'Frozen' },
]

function TitleCards({ title, category }) {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += direction === 'left' ? -300 : 300
    }
  }

  return (
    <div className="title-cards">
      <h2>{title || 'Popular on Netflix'}</h2>
      <div className="card-list" ref={scrollRef}>
        {cardsData.map((card) => (
          <Link to={`/player/${card.id}`} key={card.id} className="card">
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TitleCards
