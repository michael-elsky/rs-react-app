export interface DataProps {
  title: string;
  opening_crawl: string;
}

export interface ResultProps {
  data: DataProps[] | null;
  isLoading: boolean;
}
