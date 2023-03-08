import React, { useState } from "react";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from "react-places-autocomplete";
import "./Search.scss";
import InputSearch from "../../../atoms/InputSearch/InputSearch";

const Search = ({ setCoordinates, setAddress, address }) => {

    const handleChange = (address) => {
        setCoordinates(false);
        setAddress(address);
    };

    const handleSelect = async (address) => {
        try {
            const results = await geocodeByAddress(address);
            const latLng = await getLatLng(results[0]);
            setAddress(address);
            setCoordinates([latLng.lat, latLng.lng]);
        } catch (error) {
            console.error("Error", error);
        }
    };

    return (
        <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
        >
            {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
            }) => (
                <div className="SearchMap">
                    <div className="nameCity">
                        <InputSearch
                            {...getInputProps({
                                placeholder: "Ubicación",
                            })}
                        />
                        <div className="">
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion) => {
                                const className = suggestion.active
                                    ? "suggestion-item--active"
                                    : "suggestion-item";
                                const style = suggestion.active
                                    ? {
                                          backgroundColor: "#fafafa",
                                          cursor: "pointer",
                                      }
                                    : {
                                          backgroundColor: "#ffffff",
                                          cursor: "pointer",
                                      };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                        className={"city"}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    );
};

export default Search;
