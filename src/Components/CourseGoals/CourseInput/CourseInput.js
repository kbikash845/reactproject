import React,{useState} from 'react'
import Button from '../../UI/Button/Button';
import  "./CourseInput.css";

const CourseInput=props=> {

    const [enteredValue, setEnteredValue] = useState('');
    const[isValid, setIsvalid]=useState(false);
  
    const goalInputChangeHandler = event => {
      if(event.target.value.trim().length>0){
        setIsvalid(true);
      }
      setEnteredValue(event.target.value);
    };
       
  
    const formSubmitHandler = event => {
      event.preventDefault();
      if(enteredValue.trim().length===0){
        setIsvalid(false);
        return;
      }
      props.onAddGoal(enteredValue);
  
    };
  return (
    <form className='main_container' onSubmit={formSubmitHandler}>
      <div className={`form-control ${ !isValid ? 'invalid' :''}`}>
        <label  style={{color:!isValid ? "red":"black"}}>Course Goal</label>
        <input style={{borderColor:!isValid ? "red":"black"}} type="text"onChange={goalInputChangeHandler} />
      </div>
      <Button className={`button ${!isValid ?'blurButton':'originalButton'}`} type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput
