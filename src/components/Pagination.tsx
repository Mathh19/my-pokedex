import { MdKeyboardArrowLeft } from 'react-icons/md';

import { List } from '@mui/material';
import usePagination from '@mui/material/usePagination/usePagination';

type PaginationProps = {
  count: number;
  setPage: (page: number) => void;
};

export const Pagination = ({ count, setPage }: PaginationProps) => {
  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const { items } = usePagination({
    count: count,
    onChange: handleChange
  });

  return (
    <nav>
      <List className="flex gap-3 items-center list-none max-sm:gap-2">
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <button
                type="button"
                className={`${
                  selected && 'font-bold outline outline-1'
                } bg-gradient-to-t from-zinc-700 to-zinc-600 rounded-full w-8 h-8 max-sm:w-7 max-sm:h-7`}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button
                type="button"
                className="text-3xl max-sm:text-2xl"
                aria-label={type === 'previous' ? 'previous' : 'next'}
                {...item}
              >
                {type === 'previous' ? (
                  <MdKeyboardArrowLeft />
                ) : (
                  <MdKeyboardArrowLeft className="rotate-180" />
                )}
              </button>
            );
          }

          return (
            <li key={index} className="flex items-center">
              {children}
            </li>
          );
        })}
      </List>
    </nav>
  );
};
