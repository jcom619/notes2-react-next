import Link from 'next/link';

const JScript = () => {
  return (
    <div className='center'>

    <div id="intro">

      <h5>Table Of Contents:</h5>

      <Link href="/">
        <p style={{'color':'green'}}>home</p>
      </Link>
    </div>

    <div className="">

        <div id="arrays" className="">
          <img className="center" src="images/arrays1.png" alt="" width="100%"/>
          <img className="center" src="images/arrays2.png" alt="" width="100%"/>
        </div>

    </div>

    <div id="bottom"></div>
    <style jsx>
      {`
        .center {
          text-align: center;
        }
      `}
    </style>
    </div>
  );
}

export default JScript;
