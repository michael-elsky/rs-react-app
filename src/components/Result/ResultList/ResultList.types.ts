import type { DataProps } from '../Result.types';

export interface ResultListProps {
  data: DataProps[];
  onClose: () => void;
}
