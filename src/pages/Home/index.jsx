import Container from '../../components/Container';
import Footer from '../../components/Footer';
import CardList from './components/CardList';
import Category1 from './components/Category1';
import Category2 from './components/Category2';
import Category3 from './components/Category3';
import Navbar from '../Home/components/Navbar'
import Hero from '../Home/components/Hero'

const Home = () => {
  return (
    <>
      <Container>
        <Navbar/>
        <Hero/>
        <CardList />
        <Category1 />
        <Category2 />
        <Category3 />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
