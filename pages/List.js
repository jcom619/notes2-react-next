import Link from 'next/link';

const List = () => {
  return (
    <div>
      <h1>Note List</h1>
      <h2><a href='/jscriptnotes'>JavaScript</a></h2>
      <h2><a href='/pythonnotes'>Python</a></h2>
      <Link href="/">
        <p style={{'color':'green'}}>home</p>
      </Link>
    </div>
  );
}

export default List;
