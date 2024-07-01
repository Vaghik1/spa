import { PaginationContainer, PageButton } from './Pagination.styles';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const handlePageChange = (page: number) => {
      if (page >= 1 && page <= totalPages) {
          onPageChange(page);
      }
  };

  const renderPageButtons = () => {
      const buttons = [];
      
      buttons.push(
          <PageButton key={1} $active={currentPage === 1} onClick={() => handlePageChange(1)}>
              1
          </PageButton>
      );

      if (currentPage > 3) {
          buttons.push(<span key="left-ellipsis">...</span>);
      }

      for (let page = Math.max(2, currentPage - 1); page <= Math.min(totalPages - 1, currentPage + 1); page++) {
          buttons.push(
              <PageButton key={page} $active={currentPage === page} onClick={() => handlePageChange(page)}>
                  {page}
              </PageButton>
          );
      }

      if (currentPage < totalPages - 2) {
          buttons.push(<span key="right-ellipsis">...</span>);
      }

      if (totalPages > 1) {
          buttons.push(
              <PageButton key={totalPages} $active={currentPage === totalPages} onClick={() => handlePageChange(totalPages)}>
                  {totalPages}
              </PageButton>
          );
      }

      return buttons;
  };

  return (
      <PaginationContainer>
          <PageButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              Prev
          </PageButton>
          {renderPageButtons()}
          <PageButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
          </PageButton>
      </PaginationContainer>
  );
};


export default Pagination;
