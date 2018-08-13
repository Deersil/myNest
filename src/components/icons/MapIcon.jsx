import React from 'react';
import PropTypes from 'prop-types';

const MapIcon = (props) => {
  const fillStyle = props.active ? '#212633' : '#C3C5CD';
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>map</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g id="Hotel" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Главная-—-Поиск--—--отелей-—-по-каталогу-(1440)-" transform="translate(-1322.000000, -82.000000)">
          <rect x="0" y="0" width="1440" height="1379" />
          <g id="Group-4-Copy" transform="translate(1309.000000, 76.000000)" fill={fillStyle} fillRule="nonzero">
            <g id="map" transform="translate(13.000000, 6.000000)">
              <g id="Layer_1">
                <path d="M23.217375,6.782625 L20.3252812,6.782625 C20.3396719,6.60960937 20.3478281,6.43565625 20.3478281,6.26090625 C20.3478281,2.80860938 17.5392187,0 14.0869688,0 C10.6347187,0 7.82610937,2.80860938 7.82610937,6.26085937 C7.82610937,6.43565625 7.83426563,6.60960937 7.84865625,6.78257812 L4.69570312,6.78257812 L4.69570312,1.30434375 C4.69570312,0.87215625 4.3453125,0.52171875 3.91307812,0.52171875 C1.755375,0.52171875 0,2.27714062 0,4.43479687 L0,20.0869688 C0,22.244625 1.755375,24 3.91303125,24 L23.217375,24 C23.6495625,24 24,23.6496094 24,23.217375 L24,7.56520313 C24,7.13301562 23.6496094,6.782625 23.217375,6.782625 Z M14.0869688,1.56520313 C16.6761562,1.56520313 18.782625,3.67167188 18.782625,6.26085937 C18.782625,8.06085937 17.7764531,9.67560938 16.1568281,10.4750156 C15.9837188,10.5604688 15.84825,10.7068594 15.7765781,10.8861562 L14.0869688,15.1101562 L12.3973594,10.8861563 C12.3256406,10.7069062 12.1902187,10.5604688 12.0171094,10.4750156 C10.3974844,9.67560938 9.3913125,8.06085938 9.3913125,6.26085938 C9.3913125,3.67167187 11.4977813,1.56520313 14.0869688,1.56520313 Z M3.13045312,2.22103125 L3.13045312,6.64846875 C2.2194375,6.3255 1.56525,5.45507812 1.56525,4.43475 C1.56520312,3.414375 2.2194375,2.54404687 3.13045312,2.22103125 Z M1.56520313,7.56309375 C2.70323437,8.4193125 3.8026875,8.34792187 4.3183125,8.34782812 L8.18503125,8.34782812 C8.45057812,9.09735937 8.85225,9.78295312 9.37884375,10.3839844 L4.69565625,15.0671719 L1.56520313,11.9367188 L1.56520313,7.56309375 Z M3.91303125,22.4347969 C2.6184375,22.4347969 1.56520313,21.3815625 1.56520313,20.0869688 L1.56520313,14.15025 L9.84975,22.4347969 L3.91303125,22.4347969 L3.91303125,22.4347969 Z M22.4347969,22.4347969 L15.1937344,22.4347969 L22.4347969,15.1937344 L22.4347969,22.4347969 Z M22.4347969,12.9802031 L12.9802031,22.4347969 L12.0632813,22.4347969 L5.80242188,16.1738906 L10.5508594,11.4254531 C10.7123906,11.5363125 10.8793594,11.6397188 11.0512031,11.7353906 L13.3602656,17.5081406 C13.6220156,18.1625156 14.5518281,18.1624219 14.8135313,17.5081406 L17.1225938,11.7353906 C18.4399688,11.0026406 19.4719219,9.80648438 19.9888125,8.34782813 L22.4347969,8.34782813 L22.4347969,12.9802031 Z" id="Shape" />
                <path d="M14.0869688,3.13045313 C12.3608438,3.13045313 10.9565156,4.53478125 10.9565156,6.26090625 C10.9565156,7.98703125 12.3608438,9.39135938 14.0869688,9.39135938 C15.8130938,9.39135938 17.2174219,7.98703125 17.2174219,6.26090625 C17.217375,4.53473438 15.8130938,3.13045313 14.0869688,3.13045313 Z M14.0869688,7.82610938 C13.2239063,7.82610938 12.5217656,7.12396875 12.5217656,6.26090625 C12.5217656,5.39784375 13.2239063,4.69570313 14.0869688,4.69570313 C14.9500313,4.69570313 15.6521719,5.39784375 15.6521719,6.26090625 C15.6521719,7.12392188 14.9500313,7.82610938 14.0869688,7.82610938 Z" id="Shape" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

MapIcon.propTypes = {
  active: PropTypes.bool,
};

MapIcon.defaultProps = {
  active: false,
};

export default MapIcon;
