import ApolloClient from 'apollo-boost';
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Head from 'next/head'
import SellerDetailsForm from '../components/sellerDetailsForm'

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1%',
    marginBottom: '1%'
  }
});

function Home(){
  const classes = useStyles();
  return (
  <Container className={classes.root}>
    <Head>
      <title>WFTO: Partner App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <SellerDetailsForm />

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </Container>
)
}

export default Home;
