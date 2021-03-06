export const CHANGE_PLACE = 'CHANGE_PLACE';
export function changePlace(place) {
  return {
    type: CHANGE_PLACE,
    place
  };
}

export const CHANGE_MAP_BOUNDS = 'CHANGE_MAP_BOUNDS';
export function changeMapBounds(mapBounds) {
  return {
    type: CHANGE_MAP_BOUNDS,
    mapBounds
  };
}

export const CHANGE_SELECTED_LOCATION = 'CHANGE_SELECTED_LOCATION';
export function changeSelectedLocation(location) {
  return {
    type: CHANGE_SELECTED_LOCATION,
    location
  };
}
