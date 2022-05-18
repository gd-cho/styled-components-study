import styled from 'styled-components';

const Home = () => {
  return (
    <Wapper>
      <Title>HomePage</Title>
    </Wapper>
  );
};

export default Home;

const Wapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: antiquewhite;
  flex-direction: row;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: rgb(0, 0, 0);
  text-align: center;
`;
