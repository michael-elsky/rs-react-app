import type { ChangeEvent, SyntheticEvent } from 'react';

export interface SearchProps {
  handleSubmit: (e: SyntheticEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  searchInputValue: string;
}
