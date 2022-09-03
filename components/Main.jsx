import React, {useState, useEffect} from 'react'

const Main = () => {

  const [value, setValue] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    if(value.length > 0) {
      fetch('https://yu-gi-oh--stocks-default-rtdb.firebaseio.com/fruit').then(
        response => response.json()
      ).then(responseData => {
        let searchQuery = value.toLowerCase();
        for(const key in responseData){
          let fruit = responseData[key].name.toLowerCase();
          if(fruit.slice(0, searchQuery.length).indexOf(searchQuery) !== -1){
            setResult(prevResult => {
              return [...prevResult, responseData[key].name]
            });
          }
        }

      }).catch(error => {
        console.log(error)
      })
    } else {
      setResult([])
    }
  }, [value])

  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <input id='search' type='text' onChange={(event) => setValue(event.target.value)} value={value} placeholder='Search any card'/>
        <div className='searchBack'>
          {result.map((result, index) => (
            <a href='#' key={index}>
              <div className='searchEntry'>
                {result}
              </div>
            </a>
          ))}
        </div>
    </div>
  )
}

export default Main