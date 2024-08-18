import PropTypes from "prop-types";

const Table = ({ netIncomes }) => {
  return (
    <div className="w-[500px] m-auto overflow-hidden">
      <table className="min-w-full bg-white border-2 border-gray-200 shadow-md">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-4 border-b border-gray-300 text-center">Marca</th>
            <th className="p-4 border-b border-gray-300 text-center">Ingreso Neto</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {netIncomes.map((item) => (
            <tr key={item.brand} className="hover:bg-gray-100">
              <td className="p-4 border-b border-gray-300 text-center">{item.brand}</td>
              <td className="p-4 border-b border-gray-300 text-center font-semibold">${item.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  netIncomes: PropTypes.array.isRequired,
};

export default Table;
