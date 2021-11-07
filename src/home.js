const URL = "http://localhost:3000";

const Home = () => {
  return (
    <>
      <h1>Yodlr</h1>
      {/* Registration */}
      <a href={`${URL}/`}>Register</a>
      {/* Sign In */}
      <a href={`${URL}/`}>Sign In</a>
      {/* Admin Console */}
      <a href={`${URL}/`}>Admin Console</a>
    </>
  );
};

export default Home;
