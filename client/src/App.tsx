import axios from 'axios';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const getAllUsers = async () => {
      const response = await axios('http://127.0.0.1:3000/api/people/');
      const {
        data: {
          data: { people },
        },
      } = response;

      console.log(people);
    };

    getAllUsers();
  }, []);

  return <div className='App'></div>;
}

export default App;
