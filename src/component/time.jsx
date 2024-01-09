import  {useState}  from 'react';

function CurrentTime(){

    const now = new Date().toLocaleTimeString();
    const [time ,setTime]=useState(now);  

function updateTime(){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);

}
    return(
    <div className='container'>
        <h1>{time}</h1>
        <button onClick={updateTime} className='button'> get time </button>
        </div>
    );
}
export default CurrentTime;
