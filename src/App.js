import './App.css';
import { useEffect, useState } from 'react';
import { db, ref, get, child } from './firebaseConfig';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(db);
      try {
        const snapshot = await get(child(dbRef, '/'));
        if (snapshot.exists()) {
          const data = snapshot.val();
          const dataArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
          console.log("Fetched data:", dataArray); // Debugging: Log fetched data
          setData(dataArray);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
        <p>
          meoowwww
        </p>
        {/* <ul>
          {data.map(item => (
            <li key={item.id}>{JSON.stringify(item)}</li>
          ))}
        </ul> */}
    </div>
  );
}

export default App;
