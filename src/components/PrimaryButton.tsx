import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const PrimaryButton = ({ children }: Props) => {
  return (
    <button type="button" className="btn btn-primary">
      {children}
    </button>
  );
};
