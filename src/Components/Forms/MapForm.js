import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Components
import Input from "../Forms/Input";
import GoogleAutocomplete from "../GoogleAutocomplete";
import DatePicker from "../DatePicker";

// Modals
import Modal from "../Modals";
import ModalDepartureTrain from "../Modals/ModalDepartureTrain";
import ModalDepartureAirport from "../Modals/ModalDepartureAirport";
import ModalArrivalAirport from "../Modals/ModalArrivalAirport";
import ModalArrivalTrain from "../Modals/ModalArrivalTrain";
import ModalBookingDetails from "../Modals/ModalBookingDetails";
import ModalArrivalAddress from "../Modals/ModalArrivalAddress";
import ModalDepartureAddress from "../Modals/ModalDepartureAddress";

const MapForm = ({ isDetailsPage }) => {
  const [toggleDate, setToggleDate] = useState(false);

  // State modals
  const [showModalDepartureAirport, setModalDepartureAirport] = useState(false);
  const [showModalDepartureTrain, setModalDepartureTrain] = useState(false);
  const [showModalArrivalAirport, setModalArrivalAirport] = useState(false);
  const [showModalArrivalTrain, setModalArrivalTrain] = useState(false);
  const [showModalBookingDetails, setModalBookingDetails] = useState(false);
  const [showModalArrivalAddress, setModalArrivalAddress] = useState(false);
  const [showModalDepartureAddress, setModalDepartureAddress] = useState(false);

  const [date, setDate] = useState();

  const [departureQuery, setDepartureQuery] = useState("");
  const [arrivalQuery, setArrivalQuery] = useState("");

  return (
    <Fragment>
      <div
        className="col-md-4  tabs advanced-real-estate-tabs nomargin clearfix"
        style={{ maxWidth: "500px", top: "20px" }}
      >
        <div className="tab-container">
          <div className="tab-content clearfix" id="tab-buy">
            <div id="error_div" className="style-msg errormsg hidden">
              <div id="error_msg" className="sb-msg">
                <i className="icon-remove"></i>Merci de remplir les champs
                obligatoires
              </div>
            </div>
            <form
              className="row"
              id="course_forme"
              action="#"
              method="post"
              enctype="multipart/form-data"
            >
              <div className="row">
                <div className="col-md-12 col-12 bottommargin-sm">
                  <label for="">DEPARTURE POINT*</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span
                        data-toggle="modal"
                        data-target="#ModalTrainDepart"
                        className="input-group-text"
                        onClick={() => setModalDepartureTrain(true)}
                      >
                        <i className="fas fa-train"></i>
                      </span>
                      <span
                        data-toggle="modal"
                        data-target="#ModalPlaneDepart"
                        className="input-group-text"
                        onClick={() => setModalDepartureAirport(true)}
                      >
                        <i className="fas fa-plane-departure"></i>
                      </span>
                      {isDetailsPage && (
                        <span
                          data-toggle="modal"
                          data-target="#ModalSavedAddressDepart"
                          class="input-group-text"
                          onClick={() => setModalDepartureAddress(true)}
                        >
                          <i class="fas fa-address-book"></i>
                        </span>
                      )}
                    </div>

                    <GoogleAutocomplete
                      id={"autocompleteDeparture"}
                      placeholder="Enter an address or a place of departure"
                      query={departureQuery}
                      setQuery={query => setDepartureQuery(query)}
                    />

                    <input
                      id="lieu_depart_lat"
                      name="lieu_depart_lat"
                      type="hidden"
                      className="form-control required"
                      value=""
                    />
                    <input
                      id="lieu_depart_let"
                      name="lieu_depart_let"
                      type="hidden"
                      className="form-control required"
                      value=""
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fas fa-crosshairs"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-12 bottommargin-sm">
                  <label for="">ARRIVAL POINT*</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span
                        data-toggle="modal"
                        data-target="#ModalTrainArrive"
                        className="input-group-text"
                        onClick={() => setModalArrivalTrain(true)}
                      >
                        <i className="fas fa-train"></i>
                      </span>
                      <span
                        data-toggle="modal"
                        data-target="#ModalPlaneArrive"
                        className="input-group-text"
                        onClick={() => setModalArrivalAirport(true)}
                      >
                        <i className="fas fa-plane-arrival"></i>
                      </span>
                      {isDetailsPage && (
                        <span
                          data-toggle="modal"
                          data-target="#ModalSavedAddressDepart"
                          class="input-group-text"
                          onClick={() => setModalArrivalAddress(true)}
                        >
                          <i class="fas fa-address-book"></i>
                        </span>
                      )}
                    </div>
                    <GoogleAutocomplete
                      id={"autocompleteArrival"}
                      placeholder="Enter an address or a place of arrival"
                      query={arrivalQuery}
                      setQuery={query => setArrivalQuery(query)}
                    />

                    <input
                      id="lieu_arrive_lat"
                      name="lieu_arrive_lat"
                      type="hidden"
                      className="form-control required"
                      value=""
                    />
                    <input
                      id="lieu_arrive_let"
                      name="lieu_arrive_let"
                      type="hidden"
                      className="form-control required"
                      value=""
                    />
                    <input
                      id="distance"
                      name="distance"
                      type="hidden"
                      className="form-control required"
                      value=""
                    />
                    <input
                      id="time"
                      name="time"
                      type="hidden"
                      className="form-control required"
                      value=""
                    />
                  </div>
                </div>
                <div className="w-100"></div>
                <div className="col-md-12 col-12 bottommargin-sm">
                  <label for="">BOOK</label>

                  <div
                    className="btn-group btn-group-toggle d-flex"
                    data-toggle="buttons"
                  >
                    <label
                      id="avance_radio"
                      for="template-contactform-platform-mobile"
                      className={`btn btn-outline-secondary flex-fill t600 ls0 nott ${!toggleDate &&
                        "active"}`}
                      onClick={() => setToggleDate(false)}
                    >
                      <input
                        type="radio"
                        name="reservation"
                        checked=""
                        value="0"
                      ></input>
                      Now
                    </label>
                    <label
                      id="avance_radio_"
                      for="template-contactform-platform-web"
                      className={`btn btn-outline-secondary flex-fill t600 ls0 nott ${toggleDate &&
                        "active"}`}
                      onClick={() => setToggleDate(true)}
                    >
                      <input type="radio" name="reservation" value="1"></input>
                      In advance
                    </label>
                  </div>
                </div>

                {toggleDate && (
                  <div className="col-md-12 col-12 bottommargin-sm ">
                    <label for="">DATE DEPARTURE</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fas fa-calendar"></i>
                        </div>
                      </div>
                      <div className="form-control datePicker">
                        <DatePicker />
                        {/* <DatePicker
                          selected={date}
                          onChange={setDate}
                          className=""
                          showTimeSelect
                          placeholderText="MM/DD/YYYY 00:00 AM/PM"
                          dateFormat="Pp"
                        /> */}
                      </div>
                    </div>
                  </div>
                )}
                <div className="col-md-12 clearfix">
                  <a
                    data-toggle="modal"
                    data-target="#detailsModal"
                    className="button button-3d button-rounded btn-block nomargin view-price"
                    onClick={() => setModalBookingDetails(true)}
                  >
                    VIEW PRICE
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Modals  */}
      {/* Departure */}

      {/* setArrivalQuery */}
      <Modal
        title="Select your train station"
        open={showModalDepartureTrain}
        setOpen={show => setModalDepartureTrain(show)}
      >
        <ModalDepartureTrain
          setQuery={query => {
            setDepartureQuery(query);
            setModalDepartureTrain(false);
          }}
        />
      </Modal>
      <Modal
        title="Select your airport"
        open={showModalDepartureAirport}
        setOpen={show => setModalDepartureAirport(show)}
      >
        <ModalDepartureAirport
          setQuery={query => {
            setDepartureQuery(query);
            setModalDepartureAirport(false);
          }}
        />
      </Modal>
      <Modal
        title="Select your train station"
        open={showModalDepartureAddress}
        setOpen={show => setModalDepartureAddress(show)}
      >
        <ModalDepartureAddress
          id={"autocompleteArrival"}
          setQuery={query => {
            setDepartureQuery(query);
            setModalDepartureAddress(false);
          }}
        />
      </Modal>
      {/* End eparture */}
      {/* Arrival */}
      <Modal
        title="Select your airport"
        open={showModalArrivalTrain}
        setOpen={show => setModalArrivalTrain(show)}
      >
        <ModalArrivalTrain
          setQuery={query => {
            setArrivalQuery(query);
            setModalArrivalTrain(false);
          }}
        />
      </Modal>
      <Modal
        title="Select your train station"
        open={showModalArrivalAirport}
        setOpen={show => setModalArrivalAirport(show)}
      >
        <ModalArrivalAirport
          setQuery={query => {
            setArrivalQuery(query);
            setModalArrivalAirport(false);
          }}
        />
      </Modal>
      <Modal
        title="Select your train station"
        open={showModalArrivalAddress}
        setOpen={show => setModalArrivalAddress(show)}
      >
        <ModalArrivalAddress
          setQuery={query => {
            setArrivalQuery(query);
            setModalArrivalAddress(false);
          }}
        />
      </Modal>
      {/* Arrival */}
      {/* Booking details */}
      <Modal
        title=""
        open={showModalBookingDetails}
        setOpen={show => setModalBookingDetails(show)}
        size="lg"
      >
        <ModalBookingDetails />
      </Modal>
      {/* Booking details */}
      {/* End modals  */}
    </Fragment>
  );
};

MapForm.propTypes = {
  isDetailsPage: PropTypes.bool
};

export default MapForm;
