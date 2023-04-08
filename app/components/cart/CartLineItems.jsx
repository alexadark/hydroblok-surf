import {flattenConnection} from '@shopify/hydrogen-react';
import LineItem from './LineItem';

export const CartLineItems = ({linesObj}) => {
  const lines = flattenConnection(linesObj);
  return (
    <div className="space-y-8">
      {lines.map((line) => {
        return <LineItem key={line.id} lineItem={line} />;
      })}
    </div>
  );
};
