import { DataProps } from "@/components/Result/Result.types";
import { ChildrenProp } from "@/types/types";

export interface HomeProps extends ChildrenProp {
  initialData?: DataProps[] | null
  searchValue?: string;
}