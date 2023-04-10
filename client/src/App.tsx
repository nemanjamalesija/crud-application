import Categories from './components/Categories';
import Form from './components/Form';
import Header from './components/Header';
import People from './components/People';

function App() {
  return (
    <div className='app'>
      <Form />
      <Header />
      <Categories />
      <People />
    </div>
  );
}

export default App;
