import Component from '@ember/component';
import { tagName } from '@ember-decorators/component'; 
import layout from '../../../templates/components/ember-cartography/adapters/leaflet-map';

export default
@tagName('')
class AdaptersLeafletMapComponent extends Component {
  layout = layout;
}
