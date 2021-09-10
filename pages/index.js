import Head from 'next/head'
import Image from 'next/image'
import classNames from 'classnames'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tyler Halstead: The Official Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <a className={classNames("navBarItem", "navBarBorder")} href="https://twitter.com/nftylr" target="_blank">Twitter</a>
        <a className={classNames("navBarItem", "navBarBorder")} href="https://github.com/tihal" target="_blank">Github</a>
        <a className="navBarItem" href="https://instagram.com/tylrhal" target="_blank">Instagram</a>
      </nav>
      <main>
        <div className="text-content">
          <div className="tyler-title">
            <h3>The Official Website of</h3>
            <h1 className="title">
              Tyler Halstead
            </h1>
          </div>
          
          <div className="bio">
            <h3>Where I've worked</h3>
              <section className="bioSection">
                <p><a href="https://localwp.com" target="_blank">Local WP</a> software engineer (current)</p>
                <p><a href="https://hellodeco.co" target="_blank">HelloDeco</a> software engineer (side project)</p>
                <p><a href="https://getflywheel.com" target="_blank">Flywheel Hosting</a> technical support manager</p>
              </section>
            <h3>Tech stuff</h3>
              <section className="bioSection">
                <p><bold>Frontend</bold> javascript, react, typescript, redux, tailwind, CSS, HTML</p>
                <p><bold>Backend</bold> node, electron, typescript, graphql, PHP</p>
                <p><bold>Frameworks</bold> wordpress, laravel</p>
                <p><bold>Misc dabbling</bold> C#, unity, nginx, docker, solidity</p>
              </section>
            <h3>Places I've lived</h3>
              <section className="bioSection">
                <p>Omaha, NE</p>
                <p className="strikethrough">Stuttgart, DE</p>
                <p className="strikethrough">Kansas City, KS</p>
              </section>
          </div>
        </div>
        
        <div className="grid">
          <div className="imageBorder">
            <Image
              src="/images/personal.jpg"
              width={540}
              height={390}
              alt="A glimpse of my life"
            />
          </div>
            
        </div>
      </main>

      <footer>
        
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 1rem 0;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        nav {
          width: 100%;
          height: 70px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        bold {
          font-weight: bold;
        }

        .navBarItem {
          padding-left: 25px;
          padding-right: 25px;
          font-weight: bold;
        }
        
        .navBarBorder {
          border-right: 5px solid black;
        }

        .bio {
          margin-top: 3rem;
        }

        .bioSection {
          border-left: 5px solid black;
          padding-left: 15px;
          padding-top: 1px;
          padding-bottom: 1px;
        }

        footer {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: #2E9FF6;
          text-decoration: underline;
          font-weight: bold;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: start;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .imageBorder {
          border: 20px solid black;
          box-shadow: 5px 5px 20px black;
          background-color: black;
        }

        .text-content {
          width: 600px;
          align-self: flex-start;
        }

        .tyler-title {
          text-align: start;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        .strikethrough {
          text-decoration: line-through;
        }



        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
