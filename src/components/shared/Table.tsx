import { useMemo, useEffect } from "react";
import useFilterStore from "../../store";
import { Data, Equipment } from "../../types/types";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Pagination } from "./pagination/Pagination";

interface MainTableProps {
  data: Data[];
  isLoading: boolean;
  error: any;
}

export const MainTable = ({ data, isLoading, error }: MainTableProps) => {
  const itemsPerPage = 4;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There's been an error!</p>;
  }

  const {
    searchFilter,
    manufacturerDropdownFilter,
    provinceDropdownFilter,
    cityDropdownFilter,
    currentPage,
    setCurrentPage,
    priceRangeFilter,
  } = useFilterStore();

  const filteredSearch = (item: any) =>
    item.model.toLowerCase().includes(searchFilter.toLowerCase()) ||
    item.manufacturer.toLowerCase().includes(searchFilter.toLowerCase()) ||
    item.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
    item["serial-number"].toLowerCase().includes(searchFilter.toLowerCase()) ||
    item.state.toLowerCase().includes(searchFilter.toLowerCase()) ||
    item.city.toLowerCase().includes(searchFilter.toLowerCase());

  const filteredData = useMemo(
    () =>
      data[0].equipments.filter(
        (item: any) =>
          filteredSearch(item) &&
          (manufacturerDropdownFilter === "" ||
            item.manufacturer === manufacturerDropdownFilter) &&
          (provinceDropdownFilter === "" ||
            item.state === provinceDropdownFilter) &&
          (cityDropdownFilter === "" || item.city === cityDropdownFilter) &&
          (priceRangeFilter === null ||
            priceRangeFilter === undefined ||
            Number(item["sale-price"].text) === Number(priceRangeFilter))
      ),
    [
      data,
      searchFilter,
      manufacturerDropdownFilter,
      provinceDropdownFilter,
      cityDropdownFilter,
      priceRangeFilter,
    ]
  );

  useEffect(() => {
    setCurrentPage(0); // Reset the current page when filters change
  }, [
    searchFilter,
    manufacturerDropdownFilter,
    provinceDropdownFilter,
    cityDropdownFilter,
    priceRangeFilter,
  ]);

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentPageData = useMemo(
    () => filteredData.slice(offset, offset + itemsPerPage),
    [filteredData, currentPage]
  );

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  if (!currentPageData || currentPageData.length === 0) {
    return <p>No matches. Please try again.</p>;
  }

  console.log("filtered data", filteredData);
  console.log("price range filter", priceRangeFilter);

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Manufacturer</Th>
              <Th>Description</Th>
              <Th>Serial #</Th>
              <Th>Province</Th>
              <Th>City</Th>
              <Th>Regular Price</Th>
              <Th>Sale Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentPageData.map((equipment: Equipment) => (
              <Tr key={equipment.id}>
                <Td>{equipment.model}</Td>
                <Td>{equipment.manufacturer}</Td>
                <Td>{equipment.description}</Td>
                <Td>{equipment["serial-number"]}</Td>
                <Td>{equipment.state}</Td>
                <Td>{equipment.city}</Td>
                <Td>{equipment["regular-price"]?.text}</Td>
                <Td>{equipment["sale-price"]?.text}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination
        pageCount={pageCount}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};
