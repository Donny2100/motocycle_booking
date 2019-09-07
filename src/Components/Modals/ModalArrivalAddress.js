import React from "react";

const ModalArrivalAddress = ({setQuery}) => (
  <select
  id="selectSavedAddressDepart"
  class="form-control"
  data-selectsplitter-secondselect-selector=""
  size="17"
>
  <optgroup label="Home">
    <option data-lat="49.014361" data-let="2.542083" value="3"  onClick={() => setQuery('My Home')}
>
      My Home
    </option>
  </optgroup>
  <optgroup label="Work">
    <option data-lat="49.014361" data-let="2.542083" value="3" onClick={() => setQuery('My Work')}>
      My Work
    </option>
  </optgroup>
  <optgroup label="Favourite">
    <option data-lat="48.961889" data-let="2.437278" value="3" onClick={() => setQuery('My Favourite')}>
      My Favourite
    </option>
  </optgroup>
</select>
);

export default ModalArrivalAddress;
