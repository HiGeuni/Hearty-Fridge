import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import createEmotionCache from '@util/createEmotionCache';
import theme from '@styles/customColor';
import '@styles/globals.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { RecoilRoot } from 'recoil';
import { DevSupport } from '@react-buddy/ide-toolbox-next';
import { ComponentPreviews, useInitial } from '@components/dev';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();
const queryClient = new QueryClient();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <RecoilRoot>
      <CacheProvider value={emotionCache}>
        <QueryClientProvider client={queryClient}>
          <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_LOGIN_CLIENT_ID || ''}
          >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <DevSupport ComponentPreviews={ComponentPreviews}
                          useInitialHook={useInitial}
              >
                <Component {...pageProps} />
              </DevSupport>
            </ThemeProvider>
          </GoogleOAuthProvider>
        </QueryClientProvider>
      </CacheProvider>
    </RecoilRoot>
  );
};

export default MyApp;
