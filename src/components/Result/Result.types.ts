import type { ChildrenProp } from '../../types/types';

export interface DataProps {
  episode_id: number;
  title: string;
  opening_crawl: string;
}

export interface ResultProps extends ChildrenProp {
  data: DataProps[] | null;
  isLoading: boolean;
  errorMessage: string;
}
