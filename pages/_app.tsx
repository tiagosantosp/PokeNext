import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import { ListProvider } from '../Providers/Lista'

function MyApp({ Component, pageProps }) {
  return (
    <ListProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ListProvider>
  ) 
}

export default MyApp
