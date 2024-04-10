import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "@/supabase";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/apollo";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <ApolloProvider client={apolloClient}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </SessionContextProvider>
  );
}
