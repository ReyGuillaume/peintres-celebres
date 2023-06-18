import { Link } from 'react-router-dom'
import "./ArtistCard.css"

const ArtistCard = ({ artistId, artistImageUrl, artistName }) => {
  return (
    <Link to={'artiste/' + artistId} className='artist-card'>
      <img src={artistImageUrl} alt={artistName} className='artist-card__image'/>
      <p className='artist-card__name'>{artistName}</p>
    </Link>
  )
}

export default ArtistCard
