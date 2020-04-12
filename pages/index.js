import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Head from 'next/head';
import SellerDetailsForm from '../components/sellerDetailsForm';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { ApolloProvider } from '@apollo/react-hooks';

// Connect ApolloClient to GraphQL
let initialState = null;
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://wfto-covid19-dev.herokuapp.com/v1/graphql', // Server URL (must be absolute)
    fetch: fetch,
  }),
  cache: new InMemoryCache().restore(initialState),
});

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1%',
    marginBottom: '1%',
  },
});

function Home() {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
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
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </Container>
    </ApolloProvider>
  );
}

export default Home;
