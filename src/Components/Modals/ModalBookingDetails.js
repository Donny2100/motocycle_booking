import React from "react";

const ModalBookingDetails = () => (
  <div className="row">
    <div className="col-md-12">
      {/* <!-- Nav tabs --> */}
      <ul className="nav nav-tabs" style={{ "justify-content": "center" }}>
        <li className="active" style={{ "marginBottom": "16px" }}>
          <a
            className="booking-details-header active"
            style={{ color: "black" }}
            href="#Login"
            data-toggle="tab"
          >
            Booking Details
          </a>
        </li>
      </ul>
      {/* <!-- Tab panes --> */}
      <div className="tab-content">
        <div className="tab-pane active" id="Login">
          <form role="form" className="form-horizontal">
            <div className="form-group border-bottom-form">
              <label for="email" className="col-sm-2 control-label ">
                Departure:
              </label>
              <p className="inline-block">Sydney</p>
            </div>
            <div className="form-group border-bottom-form">
              <label for="email" className="col-sm-2 control-label">
                Arrival:
              </label>
              <p className="inline-block">Melbourne</p>
            </div>
            <div className="form-group border-bottom-form">
              <label for="email" className="col-sm-2 control-label">
                BookingType:
              </label>
              <p className="inline-block">In advance</p>
            </div>
            <div className="form-group border-bottom-form">
              <label for="email" className="col-sm-2 control-label">
                Date:
              </label>
              <p className="inline-block">24 Sep 2018 15:44</p>
            </div>
            <div className="form-group border-bottom-form">
              <label for="email" className="col-sm-2 control-label">
                Price
              </label>
              <p className="inline-block">24 / km</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default ModalBookingDetails;
