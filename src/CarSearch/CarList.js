import React, { PropTypes } from 'react';
import { List } from 'react-virtualized';
import classnames from 'classnames';
import { connect } from '../util/react-redux-custom-store-key';
import { changeSelectedLocation } from './actions';
import './styles/CarList.css';

const mapStateToProps = ({ serverData, mapBounds, selectedLocation }) => ({
  data: serverData.data,
  mapBounds,
  selectedLocation
});

const CarList = ({ data, mapBounds, selectedLocation }, { carSearchStore }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  const locations = [];
  for (const city of data.citiesAndLocations) {
    for (const location of city.locations) {
      if (mapBounds && mapBounds.contains({ lat: location.geo[0], lng: location.geo[1] })) {
        locations.push(location);
      }
    }
  }

  // eslint-disable-next-line
  const rowRenderer = ({ key, index, style }) => {
    const location = locations[index];

    return (
      // eslint-disable-next-line
      <div
        className="CarListItemContainer"
        key={key}
        style={style}
        onClick={() => carSearchStore.dispatch(changeSelectedLocation(location))}
      >
        <div className={classnames(['CarListItem', location === selectedLocation && 'selected'])}>
          {location.addr}
        </div>
      </div>
    );
  };

  return (
    <div className="CarList">
      <List
        width={320}
        height={400}
        rowCount={locations.length}
        rowHeight={100}
        rowRenderer={rowRenderer}
      />
    </div>
  );
};

CarList.propTypes = {
  data: PropTypes.object,
  mapBounds: PropTypes.object,
  selectedLocation: PropTypes.object
};

CarList.contextTypes = {
  carSearchStore: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(CarList, 'carSearchStore');
