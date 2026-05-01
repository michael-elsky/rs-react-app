import type { SyntheticEvent } from "react";

export interface SearchProps {
  handleSubmit: (e: SyntheticEvent<HTMLFormElement>) => void;
  searchInputValue: string;
}
