"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  currentPage: number;
  pageSize: number;
  totalRecord: number;
  handlePageChange: (page: number) => void;
};

const BgsPagination = ({
  currentPage,
  pageSize,
  totalRecord,
  handlePageChange,
}: Props) => {
  const numerPage = Array.from(Array(Math.ceil(totalRecord / pageSize)).keys());

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </PaginationItem>
        {numerPage.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={() => handlePageChange(page + 1)}
              isActive={currentPage === page + 1}
            >
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default BgsPagination;
