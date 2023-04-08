import {Money} from '@shopify/hydrogen';

export const CartSummary = ({cost}) => {
  return (
    <>
      <dl className="space-y-2">
        <div className="flex items-end justify-between mb-4">
          <h3 className="capitalize text-3xl">Subtotal</h3>
          <div>
            {cost?.subtotalAmount?.amount ? (
              <Money
                data={cost?.subtotalAmount}
                className="font-bold text-lg"
              />
            ) : (
              '-'
            )}
          </div>
        </div>
      </dl>
    </>
  );
};
