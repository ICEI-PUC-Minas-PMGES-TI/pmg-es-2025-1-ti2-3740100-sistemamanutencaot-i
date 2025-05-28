import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle, FaInbox, FaFilter } from "react-icons/fa";

function FiltroStatus({ onChange }) {
  const [selected, setSelected] = useState("Pendentes");

  const handleSelect = (status) => {
    setSelected(status);
    onChange?.(status); // dispara callback se passado
  };

  return (
    <div className="d-flex align-items-center gap-2">
      <span>Filtrar por:</span>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle
          variant="primary"
          id="dropdown-basic"
          className="d-flex align-items-center gap-1"
        >
          <FaFilter /> {selected}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="Todos">
            <FaInbox className="me-2 text-info" />
            Todos
          </Dropdown.Item>
          <Dropdown.Item eventKey="Aceitos">
            <FaCheckCircle className="me-2 text-success" />
            Aceitos
          </Dropdown.Item>
          <Dropdown.Item eventKey="Recusados">
            <FaTimesCircle className="me-2 text-danger" />
            Recusados
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default FiltroStatus;
