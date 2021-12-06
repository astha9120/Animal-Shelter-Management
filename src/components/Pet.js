const Pet = ({
  id,
  name,
  age,
  weight,
  breed,
  color,
  description,
  photo,
  type,
}) => {

  const arrayBufferToBase64 = (buffer)=> {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
};

  return (
    <div className="pet-wrapper">
      <div className="pet-img-wrapper">
      {/* <img src="data:image/<%=image.img.contentType%>;base64,
                     <%=image.img.data.toString('base64')%>"/> */}
        {/* <img src={photo} className="pet-img" /> */}

        <img src={`data:image/png;base64,${arrayBufferToBase64(photo.data.data)}`}  className="pet-img"/>
      </div>
      <div className='details-wrapper'>
        <div className="place-center"><b>Type:&nbsp;</b> {type}</div>

        <div className="inner-grid">
            <div className="place-center">
                <b>Age:&nbsp;</b> {age}
            </div>
            <div className="place-center">
                <b>Weight:</b>&nbsp; {weight}
            </div>
            <div className="place-center">
                <b>Breed:</b>&nbsp; {breed}
            </div>
            <div className="place-center">
                <b>Color:</b>&nbsp; {color}
            </div>
        </div>

        <div className="place-center">
            <b>Discription:</b>&nbsp; <div className="place-center">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Pet;
