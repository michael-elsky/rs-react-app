import type { FormTypes } from "./Modal.types";

export interface MainProps {
  onOpen: (formType: FormTypes) => void
}
