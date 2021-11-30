const Pet = ({
  id,
  name,
  age,
  weight,
  breed,
  color,
  discription,
  photo,
  type,
}) => {
  return (
    <div className="pet-wrapper">
      <div className="pet-img-wrapper">
        <img src={photo} className="pet-img" />
      </div>
      <div className='details-wrapper'>
        <div className="place-center"><b>Name:&nbsp;</b> {name}</div>

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
            <b>Discription:</b>&nbsp; <div className="place-center">{discription}</div>
        </div>
      </div>
    </div>
  );
};

export default Pet;
