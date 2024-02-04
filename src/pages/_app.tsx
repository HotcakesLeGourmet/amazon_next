import RootLayout from '@/components/RootLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
import { store, persistor } from "@/store/store"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PersistGate } from 'redux-persist/integration/react';


export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (

    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null} >
        <SessionProvider session={session}>
          <div className="font-bodyFont bg-gray-300" >
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          </div>
        </SessionProvider>
      </PersistGate>
    </Provider>

  )
}
