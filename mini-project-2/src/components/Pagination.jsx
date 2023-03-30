import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function SpellPagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  const handlePageChange = (event, value) => {
    onPageChange(value);
  };
  return (
    <Stack alignItems="center" justifyContent="center" className="spell__pagination">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        class="spell__pagination"
      />
    </Stack>
  );
}
