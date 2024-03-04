import { Table } from "react-bootstrap";
import { CustomButton } from "../CustomButton";

export const CustomTable = () => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>City</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Sur</td>
            <td>20</td>
            <td>City</td>
            <td>
              <CustomButton buttonContent="Edit" />
              <CustomButton buttonContent="Delete" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
