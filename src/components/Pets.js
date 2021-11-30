import { connect } from "react-redux";
import Pet from "./Pet";

const Pets = ({ pets }) => {

    console.log(pets)
  return (
    <div>
      {pets.map((pet) => {
        return <Pet key={pet.id} {...pet} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pets: state.petListReducer,
  };
};
export default connect(mapStateToProps, null)(Pets);
