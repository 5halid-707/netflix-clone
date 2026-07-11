import { useRef } from 'react'
import { Link } from 'react-router-dom'

const base = 'https://image.tmdb.org/t/p/w500'

const categories = {
  popular: [
    { id: 1, name: 'Inception', path: '/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg' },
    { id: 2, name: 'The Dark Knight', path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
    { id: 3, name: 'Interstellar', path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
    { id: 4, name: 'Avengers: Endgame', path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg' },
    { id: 5, name: 'Spider-Man: No Way Home', path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg' },
    { id: 6, name: 'Joker', path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' },
    { id: 7, name: 'Dune', path: '/d5NXSklXo0qyIYkgV94XAgMIckC.jpg' },
    { id: 8, name: 'Avatar', path: '/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg' },
    { id: 9, name: 'Titanic', path: '/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg' },
    { id: 10, name: 'Gladiator', path: '/wN2xWp1eIwCKOD0BHTcErTBv1Uq.jpg' },
    { id: 11, name: 'The Matrix', path: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' },
    { id: 12, name: 'Frozen', path: '/itAKcobTYGpYT8Phwjd8c9hleTo.jpg' },
  ],
  trending: [
    { id: 13, name: 'Oppenheimer', path: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
    { id: 14, name: 'Barbie', path: '/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg' },
    { id: 15, name: 'The Last of Us', path: '/cuG06LDIwDOq48u2nkc3z5Ait32.jpg' },
    { id: 16, name: 'Wednesday', path: '/aV77rKw8SnelWqP8l3TQoJawlvu.jpg' },
    { id: 17, name: 'Stranger Things', path: '/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg' },
    { id: 18, name: 'Squid Game', path: '/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg' },
    { id: 19, name: 'The Boys', path: '/l1S7IHu5S4VyYpP0Z4lh6MLfK6g.jpg' },
    { id: 20, name: 'House of the Dragon', path: '/3cV7NLkN8WY5LECzLxI73PXE5Oq.jpg' },
    { id: 21, name: 'The Witcher', path: '/AoGsDM02UVt0npBA8OvpDcZbaMi.jpg' },
    { id: 22, name: 'Arcane', path: '/pTLCakNJsuKnHTQKPcgOUT8wpLr.jpg' },
    { id: 23, name: 'One Piece', path: '/b9nSI5cl2bTj7FlhQl4TIoOwvW6.jpg' },
    { id: 24, name: 'Fallout', path: '/ayfqD7hXWhKS1AFVy7Bkp1AnrEJ.jpg' },
  ],
  topRated: [
    { id: 25, name: 'Breaking Bad', path: '/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg' },
    { id: 26, name: 'Game of Thrones', path: '/tzjMPNZdQSDXI9p9DjgwYxScxI9.jpg' },
    { id: 27, name: 'The Crown', path: '/1M876KPjulVwppEpldhdc8V4o68.jpg' },
    { id: 28, name: 'Dark', path: '/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg' },
    { id: 29, name: 'Money Heist', path: '/vmbuII1PYgn1PaJbLbpkt2WHd1Q.jpg' },
    { id: 30, name: 'Peaky Blinders', path: '/wDgEshHZzwFIkjuOEbvhqMxWD6q.jpg' },
    { id: 31, name: 'The Mandalorian', path: '/hI8ocEmWWaf3kY8EwOmqriU5UqV.jpg' },
    { id: 32, name: 'Succession', path: '/mqPC7xVZGdeLh8v0huzxD0c9r0S.jpg' },
    { id: 33, name: 'The Bear', path: '/hih5aTwgmHhMuyVSbyaPBnBJftt.jpg' },
    { id: 34, name: 'Sherlock', path: '/g11y0jZ1ugmlpDdZrw8hOr6NEFo.jpg' },
    { id: 35, name: 'Narcos', path: '/c7KdaiueiA4QpTE1VGJmRHRN4Cd.jpg' },
    { id: 36, name: 'The Office', path: '/dWkbUgxMQyrgzGywix5l71i6Feu.jpg' },
  ],
  action: [
    { id: 37, name: 'John Wick', path: '/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg' },
    { id: 38, name: 'Mad Max: Fury Road', path: '/rvoQHUQGskr7HIQdsyYeOe0GYiL.jpg' },
    { id: 39, name: 'Die Hard', path: '/qnuqN8eKTJhoTE7X9L1UDTiaOtw.jpg' },
    { id: 40, name: 'Mission: Impossible', path: '/lonGvu7rQ4D1WboRLsJ5Pzpy0dm.jpg' },
    { id: 41, name: 'The Raid', path: '/w9X07mkZ6Xgyz2MsuyZ49CDGcg1.jpg' },
    { id: 42, name: 'Predator', path: '/aN3cdjIK70KGmD84et8MMblU87Q.jpg' },
    { id: 43, name: 'The Terminator', path: '/yOsotF96xbCplevNUnzowroFq5A.jpg' },
    { id: 44, name: 'Extraction', path: '/mpc7QPLEBdxH7wdOjM8qxoTCc8q.jpg' },
    { id: 45, name: 'Atomic Blonde', path: '/kV9R5h0Yct1kR8Hf8sJ1nX0Vz4x.jpg' },
    { id: 46, name: 'Nobody', path: '/nTBiOV46q7H5WzkIRqeKTwSFPXs.jpg' },
    { id: 47, name: 'The Equalizer', path: '/9JP0K0HXDrdRyfJ8egsCCyMC8qc.jpg' },
    { id: 48, name: 'Taken', path: '/ognkaUSNgJe1a2pjB4UNdzEo5jT.jpg' },
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

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += direction === 'left' ? -300 : 300
    }
  }

  return (
    <div className="title-cards">
      <h2>{title}</h2>
      <div className="card-list" ref={scrollRef}>
        {items.map((card) => (
          <Link to={`/player/${card.id}`} key={card.id} className="card">
            <img src={`${base}${card.path}`} alt={card.name} />
            <p>{card.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TitleCards
