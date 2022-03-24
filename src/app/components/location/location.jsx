import location from "./img/location.svg"
import "./location.css"

export function Location(props) {
  return (
    <section className="location">
      <img src={props.imageUrl} alt="landscape" className="location-img" />
      <div className="location-sideText">
        <div>
          <img src={location} alt="map pin" className="location-sideText-pin" />
          <span className="location-sideText-country">{props.location}</span>
          <a href={props.googleMapsUrl} className="location-sideText-link">
            View on Google Maps
          </a>
        </div>

        <h2 className="location-sideText-title">{props.title}</h2>

        <div>
          <span className="location-sideText-dates">
            {props.startDate} - {props.endDate}
          </span>
        </div>

        <p className="location-sideText-description">{props.description}</p>
      </div>
    </section>
  )
}
