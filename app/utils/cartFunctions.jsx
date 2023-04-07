/**
 * Create a cart with line(s) mutation
 * @param input CartInput https://shopify.dev/api/storefront/{api_version}/input-objects/CartInput
 * @see https://shopify.dev/api/storefront/{api_version}/mutations/cartcreate
 * @returns result {cart, errors}
 * @preserve
 */
export async function cartCreate({input, storefront}) {
  const {cartCreate} = await storefront.mutate(CREATE_CART_MUTATION, {
    variables: {input},
  });

  return cartCreate;
}
/**
 * Storefront API cartLinesAdd mutation
 * @param cartId
 * @param lines [CartLineInput!]! https://shopify.dev/api/storefront/{api_version}/input-objects/CartLineInput
 * @see https://shopify.dev/api/storefront/{api_version}/mutations/cartLinesAdd
 * @returns result {cart, errors}
 * @preserve
 */
export async function cartAdd({cartId, lines, storefront}) {
  const {cartLinesAdd} = await storefront.mutate(ADD_LINES_MUTATION, {
    variables: {cartId, lines},
  });

  return cartLinesAdd;
}
/**
 * Create a cart with line(s) mutation
 * @param cartId the current cart id
 * @param lineIds [ID!]! an array of cart line ids to remove
 * @see https://shopify.dev/api/storefront/2022-07/mutations/cartlinesremove
 * @returns mutated cart
 * @preserve
 */
export async function cartRemove({cartId, lineIds, storefront}) {
  const {cartLinesRemove} = await storefront.mutate(
    REMOVE_LINE_ITEMS_MUTATION,
    {
      variables: {
        cartId,
        lineIds,
      },
    },
  );

  if (!cartLinesRemove) {
    throw new Error('No data returned from remove lines mutation');
  }
  return cartLinesRemove;
}

//Cart queries

const USER_ERROR_FRAGMENT = `#graphql
    fragment ErrorFragment on CartUserError {
      message
      field
      code
    }
  `;
const LINES_CART_FRAGMENT = `#graphql
    fragment CartLinesFragment on Cart {
      id
      totalQuantity
    }
  `;
//! @see: https://shopify.dev/api/storefront/{api_version}/mutations/cartcreate
const CREATE_CART_MUTATION = `#graphql
    mutation ($input: CartInput!, $country: CountryCode = ZZ, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
      cartCreate(input: $input) {
        cart {
          ...CartLinesFragment
        }
        errors: userErrors {
          ...ErrorFragment
        }
      }
    }
    ${LINES_CART_FRAGMENT}
    ${USER_ERROR_FRAGMENT}
  `;
const ADD_LINES_MUTATION = `#graphql
    mutation ($cartId: ID!, $lines: [CartLineInput!]!, $country: CountryCode = ZZ, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          ...CartLinesFragment
        }
        errors: userErrors {
          ...ErrorFragment
        }
      }
    }
    ${LINES_CART_FRAGMENT}
    ${USER_ERROR_FRAGMENT}
  `;
const REMOVE_LINE_ITEMS_MUTATION = `#graphql
    mutation ($cartId: ID!, $lineIds: [ID!]!, $language: LanguageCode, $country: CountryCode)
    @inContext(country: $country, language: $language) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          id
          totalQuantity
          lines(first: 100) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ...on ProductVariant {
                    id
                  }
                }
              }
            }
          }
        }
        errors: userErrors {
          message
          field
          code
        }
      }
    }
  `;
