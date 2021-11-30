import {useState,useEffect} from 'react'
import { FILTER_PETS } from '../reducers/Actions/petListActions';
import {connect} from 'react-redux'


const Search = ({setPets}) =>{
    const [query, setQuery] = useState("");
    useEffect(()=>{
        setPets(query)
    },[query])
    return (
      <span>
          <input className="searchbox" placeholder="Search here" onChange={(e)=>setQuery(e.target.value)}/>
      </span>
    );
}

const mapDispatchToProps = (dispatch) =>{
    return {
      setPets: (responce)=>dispatch({type: FILTER_PETS, payload: responce})
    }
  }
export default connect(null,mapDispatchToProps)(Search);