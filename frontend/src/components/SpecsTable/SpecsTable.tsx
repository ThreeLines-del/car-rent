interface SpecsTableType {
  children: React.ReactNode;
}

const SpecsTable = ({ children }: SpecsTableType) => {
  return (
    <table>
      <tbody>{children}</tbody>
    </table>
  );
};

export default SpecsTable;
