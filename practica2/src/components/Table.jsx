import PropTypes from "prop-types";

const Table = ({ brand, income }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Marca</th>
          <th>Ingreso Neto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{brand}</td>
          <td>{income}</td>
        </tr>
      </tbody>
    </table>
  );
};

Table.propTypes = {
  brand: PropTypes.string,
  income: PropTypes.number,
};

export default Table;
