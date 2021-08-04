import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Product } from './modules/Product/Product';

const Home = lazy(() => import('./modules/Home'));
const Cart = lazy(() => import('./modules/Cart'));

export const Routes = () => {
  return (
    <Switch>
      <Suspense fallback={<p>Loading...</p>}>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={Product} />
      </Suspense>
    </Switch>
  );
};
