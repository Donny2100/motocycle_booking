import React, { Fragment, PureComponent } from "react";
import Script from "react-load-script";

class GoogleAutocomplete extends PureComponent {

  handleScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = {
      types: ["(cities)"]
    }; // To disable any eslint 'google not defined' errors

    // Initialize Google Autocomplete
    /*global google*/ this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById(this.props.id),
      options
    );

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components and formatted
    // address.
    this.autocomplete.setFields(["address_components", "formatted_address"]);

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  };

  handlePlaceSelect = () => {
    // Extract City From Address Object
    const addressObject = this.autocomplete.getPlace();
    const address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      this.props.setQuery(addressObject.formatted_address)
    }
  };

  render() {
    const { placeholder, id, setQuery, query} = this.props;
    // const { query } = this.state;

    return (
      <Fragment>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBSLYqbiXK4uHXS-mdR3VBftDL9V9IS4Xs&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <input
          placeholder={placeholder}
          className="form-control"
          id={id}
          hintText="Search City"
          onChange={e => setQuery( e.target.value )}
          value={query}
        />
      </Fragment>
    );
  }
}

export default GoogleAutocomplete;
