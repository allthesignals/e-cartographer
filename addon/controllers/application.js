import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  myData = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [0, 0],
    },
    properties: {},
  }
}
