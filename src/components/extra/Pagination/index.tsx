import React, { FC, useCallback, useMemo } from 'react';
import MuiPagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Box from '@mui/material/Box';

type TPaginationProps = {
  count: number;
}

const Pagination: FC<TPaginationProps> = ({ count }) => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || 1;
  const pathname = usePathname();

  const currentParams = useMemo(() => new URLSearchParams(searchParams.toString()), [searchParams]);

  const getHref = useCallback((nextPage: number | null) => {
    currentParams.delete('page');

    if (nextPage === 1) {
      return currentParams.size === 0 ? '' : `?${currentParams.toString()}`;
    }
    return `${currentParams.size === 0 ? `?page=${nextPage}` : `?${currentParams.toString()}&page=${nextPage}`}`;
  }, [currentParams]);

  if (count < 1) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', m: '1rem 0' }}>
      <MuiPagination
        count={count}
        page={Number(page)}
        shape="rounded"
        renderItem={(item) => (
          <PaginationItem
            {...item.page !== Number(page) && {
              component: Link,
              href: `${pathname}${getHref(item.page)}`
            }}
            {...item}
          />
        )}
      />
    </Box>
  );
};

export default Pagination;
