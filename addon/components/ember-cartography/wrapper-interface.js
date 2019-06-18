import Component from '@ember/component';
import { tagName } from '@ember-decorators/component'; 
import layout from '../../templates/components/ember-cartography/wrapper-interface';

export default
@tagName('')
class CartographicWrapperInterface extends Component {
  addonComponentName = null;

  layout = layout;
}
