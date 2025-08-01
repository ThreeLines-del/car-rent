interface RowType {
  children: React.ReactNode;
}

const Row = ({ children }: RowType) => {
  return <tr>{children}</tr>;
};

export default Row;
