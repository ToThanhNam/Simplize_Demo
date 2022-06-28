import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Button from './components/Button';
import Content from './components/Content';
import Navbar from '../Home/components/Navbar';

const Blog = () => {
  return (
    <>
      <Container>
        <Navbar/>
        <Button />
        <Content />
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
