import React from "react";

const ModalDepartureAirport = ({ setQuery }) => (
  <select
    className="form-control"
    data-selectsplitter-secondselect-selector=""
    size="17"
  >
    <optgroup label="Airport Roissy Charles de Gaules">
      <option
        data-lat="49.014361"
        data-let="2.542083"
        value="3"
        onClick={() => setQuery("Terminal 1")}
      >
        Terminal 1
      </option>
      <option
        data-lat="49.002861"
        data-let="2.562722"
        value="3"
        onClick={() => setQuery("Terminal 2A")}
      >
        Terminal 2A
      </option>
      <option
        data-lat="49.004722"
        data-let="2.562083"
        value="3"
        onClick={() => setQuery("Terminal 2B")}
      >
        Terminal 2B
      </option>
      <option
        data-lat="49.003417"
        data-let="2.567417"
        value="3"
        onClick={() => setQuery("Terminal 2C")}
      >
        Terminal 2C
      </option>
      <option
        data-lat="49.005000"
        data-let="2.566806"
        value="3"
        onClick={() => setQuery("Terminal 2D")}
      >
        Terminal 2D
      </option>
      <option
        data-lat="49.003917"
        data-let="2.578000"
        value="3"
        onClick={() => setQuery("Terminal 2E")}
      >
        Terminal 2E
      </option>
      <option
        data-lat="49.005194"
        data-let="2.577639"
        value="3"
        onClick={() => setQuery("Terminal 2F")}
      >
        Terminal 2F
      </option>
      <option
        data-lat="49.006000"
        data-let="2.603139"
        value="3"
        onClick={() => setQuery("Terminal 2F")}
      >
        Terminal 2F
      </option>
      <option
        data-lat="49.012667"
        data-let="2.558889"
        value="3"
        onClick={() => setQuery("Terminal 3")}
      >
        Terminal 3
      </option>
    </optgroup>
    <optgroup label="Airport Orly">
      <option
        data-lat="48.728861"
        data-let="2.358917"
        value="3"
        onClick={() => setQuery("Terminal 1")}
      >
        Terminal 1
      </option>
      <option
        data-lat="48.728250"
        data-let="2.359417"
        value="3"
        onClick={() => setQuery("Terminal 2")}
      >
        Terminal 2
      </option>
      <option
        data-lat="48.729667"
        data-let="2.359889"
        value="3"
        onClick={() => setQuery("Terminal 3")}
      >
        Terminal 3
      </option>
      <option
        data-lat="48.729250"
        data-let="2.370222"
        value="3"
        onClick={() => setQuery("Terminal 4")}
      >
        Terminal 4
      </option>
    </optgroup>
    <optgroup label="Airport Le Bourget">
      <option
        data-lat="48.961889"
        data-let="2.437278"
        value="3"
        onClick={() => setQuery("Airport Le Bourget")}
      >
        Airport Le Bourget
      </option>
    </optgroup>
  </select>
);

export default ModalDepartureAirport;
