import Head from 'next/head'

export default function Index() {
return(
	<div className="container">
	<Head>
	  <title>Estudando Next</title>
	</Head>

	<main>
	  <p>olá mundo!</p>
	</main>

	<style jsx>{`
	  p {
	  text-align: center;
	  }
	`}
	</style>
	</div>
)
}
