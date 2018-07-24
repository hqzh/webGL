import { connect } from 'dva';
import { Map, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import 'proj4';
import 'proj4leaflet';
import 'leaflet/dist/leaflet.css'
import styles from './index.css';
import React, { PureComponent } from 'react';


class App extends PureComponent {
  state = {
    center: [22.5774626732038, 114.04924392700197],
    zoom: 13,
  }
  render() {
    const { center, zoom } = this.state
    // 百度地图专属设置,请引入 proj4.js 和 proj4leaflet.js
    const bdCrs = new L.Proj.CRS('EPSG:900913', '+proj=merc +a=6378206 +b=6356584.314245179 +lat_ts=0.0 +lon_0=0.0 +x_0=0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs', {
      resolutions: function () {
        const level = 19
        const res = [];
        res[0] = Math.pow(2, 18);
        for (var i = 1; i < level; i++) {
          res[i] = Math.pow(2, (18 - i))
        }
        return res;
      }(),
      origin: [0, 0],
      bounds: L.bounds([20037508.342789244, 0], [0, 20037508.342789244])
    });

    return (

        <Map
          crs={bdCrs}
          center={center}
          zoom={zoom}
          attributionControl={false}
          zoomControl={false}
          className={styles.root}
        >
          <TileLayer
            subdomains={[0, 1, 2]}
            tms
            url="http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=pl&udt=20180201"
          />
        </Map>

    );
  }
}





export default connect(state => {
  return {
    pathname: state.routing.location.pathname,
    text: state.global.text,
  };
})(App);
