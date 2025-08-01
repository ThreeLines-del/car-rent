interface SpecType {
  specText: string | number;
  specImage: string;
}

const Spec = ({ specText, specImage }: SpecType) => {
  return (
    <td>
      <div className="flex gap-2 pr-2 py-2">
        <img
          className="h-7 bg-blue-500 rounded-sm p-1"
          src={specImage}
          alt=""
        />
        <p className="text-gray-800">{specText}</p>
      </div>
    </td>
  );
};

export default Spec;
