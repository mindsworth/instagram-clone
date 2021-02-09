
import { ChakraProvider } from "@chakra-ui/react";
import themes from "../themes";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={themes}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
