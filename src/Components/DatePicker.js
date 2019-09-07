import React, { Fragment } from "react";
import Script from "react-load-script";

const Datetimepicker = () => {
  const handleScriptLoad = () => {
    window.$("#depart_date").datetimepicker();
  };
  return (
    <Fragment>
      <Script
        url="/assets/js/jquery.datetimepicker.js"
        onLoad={handleScriptLoad}
      />
      <input
        type="text"
        class="form-control"
        id="depart_date"
        name="depart_date"
        placeholder="MM/DD/YYYY 00:00 AM/PM"
      />

      {/* <input
          placeholder={placeholder}
          className="form-control"
          id={'timepicker'}
          hintText="Search City"
          onChange={e => setQuery( e.target.value )}
          value={query}
        /> */}
    </Fragment>
  );
};

export default Datetimepicker;
