import Component from '@ember/component';
import layout from '../../../../templates/components/ember-cartography/adapters/leaflet-map/layer';

export default class ContextualSubComponentLayer extends Component {
  layout = layout;

  data = null;
}
