// name, description, date, location, photos
const Event = ({ name, description, date, location, photo }) => {

  const arrayBufferToBase64 = (buffer)=> {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
};


  return (
    <div className="pet-wrapper">
      <div className="pet-img-wrapper">
        <img src={`data:image/png;base64,${arrayBufferToBase64(photo.data.data)}`} className="pet-img" />
      </div>
      <div className="details-wrapper">
        <div className="place-center marginer">
          <b>Name:&nbsp;</b> {name}
        </div>

        <div className="inner-grid">
          <div className="place-center marginer">
            <b>Date:&nbsp;</b> {date}
          </div>
          <div className="place-center marginer">
            <b>Location:</b>&nbsp; {location}
          </div>
        </div>

        <div className="place-center marginer">
          <b>Description:</b>&nbsp;{" "}
          <div className="place-center">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Event;
