import './Oeuvre.css'

const Oeuvre = ({ name, url, date, artist }) => {
  return (
    <article className="oeuvre">
      <div className="oeuvre__informations">
        <img src={artist.url} alt={artist.name} className="oeuvre__informations--artist-image" />
        <p className="oeuvre__informations--artist-name">{artist.name}</p>
        <h2 className="oeuvre__informations--name">{name}</h2>
        <p className="oeuvre__informations--date">{date}</p>
      </div>
      <img src={url} alt={name} className="oeuvre__image" />
    </article>
  )
}

export default Oeuvre
