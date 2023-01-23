// import {React, useState, useEffect} from 'react';

// function Hotels () {

//         const [locationInput, setLocationInput] = useState("nashville");
//         const [submit, handleSubmit] = useState(false);
//         const [data, setData] = useState(null);
//         const [btn ,setBtn] = useState(null);
  
//     const handleLocationInput = (e) => {
//       setLocationInput(e.target.value)
//     }
  
//     const handleFormSubmit = (e) => {
//       e.preventDefault();
      
//     }
  
//     const handleSearch = (e) => {
//       e.preventDefault();
//       handleSubmit(true)1
//       console.log(locationInput)
//     }

//     const handleBtn = () => {
//         setBtn(true)
//     }

//     useEffect(() => {
//         const [input, setInput] = useState('NewYork');
//         const [data, setData] = useState(null);
//         const [btn, handleBtn] = useState(false);
    
//         const handleInputText = (e) => {
//             setInput(e.target.value);
//         };
    
//         const handleBtnInput = (e) => {
//             e.preventDefault();
//             handleBtn(true)
//             return handleBtn(false);
//         }
    
//         useEffect(() => {
//             const options = {
//                 method: 'GET',
//                 headers: {
//                     'X-RapidAPI-Key': '00e3db074cmsh859ff928fa0e703p114d09jsn7ee010402a05',
//                     'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
//                 }
//             };
    
//             fetch(`https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation?query=${input}`, options)
//                 .then((res) => {
//                     if (res.ok) {
//                         return res.json();
//                     }
//                 })
//                 .then(res => setData(res.data))
//                 .catch(err => console.error(err));
//         },[btn]);
    
//         return (
//             <div>
//                 <form>
//                     <label>Enter Location:</label> <br />
//                     <input id='locationInput' name='locationInput' type='text' placeholder='location..' onChange={handleInputText} />
//                     <button type='submit' className='btn' onClick={handleBtnInput}>Submit</button>
//                     {/* {data && data.map((data) => {
//                         return <p>{data}</p>
//                     })} */}
//                 </form>
//             </div>
//         )
//     }

// export default Hotels;