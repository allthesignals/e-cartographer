import Component from '@ember/component';
import { tagName } from '@ember-decorators/component'; 
import layout from '../../../templates/components/ember-cartography/adapters/mapbox-gl';

export default
@tagName('')
class AdaptersMapboxGlComponent extends Component {
  layout = layout;
}
