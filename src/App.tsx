import { ChakraProvider, Container } from "@chakra-ui/react";
import "@fontsource-variable/montserrat";
import { useQuery } from "react-query";
import { fetchProducts } from "../src/services/api/Api";

import { Header } from "./components/shared/header/Header";
import { MainTable } from "./components/shared/Table";

import "../src/styles/typography.scss";

function App() {
  // Fetch the data
  const { data, isLoading, error } = useQuery("products", fetchProducts);

  return (
    <>
      <ChakraProvider>
        <Container maxW="1140px">
          <Header data={data} isLoading={isLoading} error={error} />
          <MainTable data={data} isLoading={isLoading} error={error} />
        </Container>
      </ChakraProvider>
    </>
  );
}

export default App;
