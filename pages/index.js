import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Note Keeper</h1>
      <Link href="/list">
        <p style={{'color':'green'}}>List</p>
      </Link>
    </div>
  );
}

export default Home;
