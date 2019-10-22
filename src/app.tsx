import { hot } from 'react-hot-loader/root'
import * as React from 'react'
import { Provider } from 'mobx-react'
import { observable, runInAction, set } from 'mobx'
import { observer } from 'mobx-react'
import { ModuleRoute } from 'sora-react-service'
import RouteComponent from './router';
import routes from './router/paths';
import Store, { IStore } from './store';

interface StateTypes {
  routes: ModuleRoute;
  store: IStore;
}

@observer
class Base extends React.PureComponent {
  @observable routes: ModuleRoute<IStore> = routes
  @observable store: IStore = new Store()

  render() {
    return (
      <Provider store={this.store} routes={this.routes}>
        <RouteComponent />
      </Provider>
    )
  }
}

export default hot(Base)
