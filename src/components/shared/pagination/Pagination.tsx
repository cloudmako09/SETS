import ReactPaginate from "react-paginate";

import "./pagination.scss";

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  currentPage: number;
}

export const Pagination = ({
  pageCount,
  onPageChange,
  currentPage,
}: PaginationProps) => {
  return (
    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      breakLabel={"..."}
      pageCount={pageCount}
      onPageChange={onPageChange}
      forcePage={currentPage} // Set the current active page using `forcePage`
      containerClassName={"pagination"}
      activeClassName={"active"}
    />
  );
};
