import '../styles/globals.css'
import '../tailwind.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ minimum: 0.1 });
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
