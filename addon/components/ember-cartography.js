import Component from '@ember/component';
import { computed } from '@ember/object'
import { tagName } from '@ember-decorators/component'; 
import layout from '../templates/components/ember-cartography';

const ENGINE_LOOKUP = {
  leaflet: 'leaflet-map',
  'mapbox-gl': 'mapbox-gl',
};

export default
@tagName('')
class EmberCartography extends Component {
  layout = layout;

  engine = null;

  options = {};

  @computed('engine')
  get componentName() {
    return ENGINE_LOOKUP[this.engine];
  }
}
