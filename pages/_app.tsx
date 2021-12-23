import React from 'react';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { AllProviders } from '../components/AllProviders';
import { useAuth } from '../context/auth';

/**
 * Dynamically load layouts. This codesplits and prevents code from the logged in layout from being
 * included in the bundle if we're rendering the logged out layout.
 */
const LoggedInLayout = dynamic(() =>
  import('../layouts/LoggedIn').then((mod) => mod.LoggedInLayout)
);

const LoggedOutLayout = dynamic(() =>
  import('../layouts/LoggedOut').then((mod) => mod.LoggedOutLayout)
);

const BlankLayout = dynamic(() => import('../layouts/Blank').then((mod) => mod.BlankLayout));

/**
 * Renders a layout depending on the result of the useAuth hook
 */
function AppWithAuth({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  const router = useRouter();

  const path = router.pathname;

  if (path === '/space') {
    return <BlankLayout>{children}</BlankLayout>;
  }

  return user ? (
    <LoggedInLayout>{children}</LoggedInLayout>
  ) : (
    <LoggedOutLayout>{children}</LoggedOutLayout>
  );
}

function App({ pageProps, Component }: AppProps) {
  return (
    <AllProviders>
      <AppWithAuth>
        <Component {...pageProps} />
      </AppWithAuth>
    </AllProviders>
  );
}

export default App;
