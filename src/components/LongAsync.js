import * as React from "react";

// const initialState = {
//   error: null,
//   isLoaded: false,
//   items: [],
// };

// const myArr = [50];



function LongAsync({ageProp}) {
  const [stt, setStt] = React.useState({
    error: null,
    isLoaded: false,
    items: [],
  });
  const [mylist, setList] = React.useState([]);
  console.log('Long Async ~> state', age);

  React.useEffect(() => {
    console.log('Lasync useeffect')
    console.log(age)
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then(
        (result) => {
          setStt({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setStt({
            isLoaded: true,
            error,
          });
        }
      );
      return function cleanup() {
        console.log('Cleaning up')
      };
  }, [stt.isLoaded]);

  
  const { error, isLoaded, items } = stt;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        <div>
            <p> ~~~~~~~ LONG ASYNC ~~~~~~~~ </p>
             <button onClick={() => { setStt({}) }}> update state </button>
             <button onClick={() =>  { setAge(90)}}> set Age to 90</button>
             <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.userId} {item.title}
          </li>
        ))}
      </ul>
        </div>
      
    );
  }
}

export default LongAsync;
