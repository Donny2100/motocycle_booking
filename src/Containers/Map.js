import React, { Fragment } from "react";
import PropTypes from "prop-types";

// Components
import MapForm from "../Components/Forms/MapForm";

const Map = ({isDetailsPage}) => (
  <Fragment>
    <div className="ride-container" id="ride-container">
      <section className="slider-element full-screen clearfix" data-height-md="500">
        <div className="form-widget">
          <div className="form-result"></div>
          <div className="full-screen">
            <div className="real-estate-tabs-slider">
              <div className="row clearfix">
                {/* Components: Map form */}
                <MapForm isDetailsPage={isDetailsPage}/>
                {/* End components: Map form */}
                <div
                  id="map"
                  className="col-md-8"
                  style={{ position: "relative", overflow: "hidden;" }}
                >
                  {/* Google map */}
                  <iframe
                    width="100%"
                    height="100%"
                    id="gmap_canvas"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1342711.3855166193!2d1.2024146692097701!3d48.90618600297122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2z0J_QsNGA0LjQtiwg0KTRgNCw0L3RhtGW0Y8!5e0!3m2!1suk!2sua!4v1574770250938!5m2!1suk!2sua"
                    frameborder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe>
                  {/* End google map */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Fragment>
);

Map.propTypes = {
  isDetailsPage: PropTypes.bool
};

export default Map;
