import React from "react";

const ModalDepartureTrain = ({setQuery}) => (
  <select className="form-control" size="7">
    <option data-lat="48.841833" data-let="2.366111" value="1" onClick={() => setQuery('Austerlitz station')}>
      Austerlitz station
    </option>
    <option data-lat="48.839306" data-let="2.382750" value="2" onClick={() => setQuery('Station Bercy')}>
      Station Bercy
    </option>
    <option data-lat="48.876944" data-let="2.359306" value="3" onClick={() => setQuery('East Railway Station')}>
      East Railway Station
    </option>
    <option data-lat="48.844444" data-let="2.374417" value="4" onClick={() => setQuery('Lyon station')}>
      Lyon station
    </option>
    <option data-lat="48.881139" data-let="2.355278" value="5" onClick={() => setQuery('North Station')}>
      North Station
    </option>
    <option data-lat="48.841306" data-let="2.320472" value="6" onClick={() => setQuery('Montparnasse Station')}>
      Montparnasse Station
    </option>
    <option data-lat="48.876000" data-let="2.323694" value="7" onClick={() => setQuery('Station Saint-Lazare')}>
      Station Saint-Lazare
    </option>
  </select>
);

export default ModalDepartureTrain;
