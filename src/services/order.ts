import { GraphQLResult } from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify';
import { Order, UpdateOrderInput } from '~/API';
import { listOrders, getOrder } from '~/graphql/queries';
import { updateOrder } from '~/graphql/mutations';

const _getOrdersList = async (): Promise<Order[] | undefined> => {
  try {
    const response = (await API.graphql(
      graphqlOperation(listOrders, {
        filter: { status: { eq: 'NEW' } },
      }),
    )) as GraphQLResult<{ listOrders: { items: Order[] } }>;
    return response.data?.listOrders.items;
  } catch (err) {
    console.log('Error Services -> getOrdersList: ', err);
  }
};

const _getOrderById = async (id: string): Promise<Order | undefined> => {
  try {
    const response = (await API.graphql(
      graphqlOperation(getOrder, { id }),
    )) as GraphQLResult<{ getOrder: Order }>;
    return response.data?.getOrder;
  } catch (err) {
    console.log('Error Services -> getOrderById: ', err);
  }
};

const _updateOrder = async (currentOrder: UpdateOrderInput): Promise<void> => {
  /**
     * You do not have to pass in createdAt and updatedAt fields,
     * AppSync manages this for you.
    If you pass in extra input fields not expected by the AppSync schema, this query will fail.
    You can see this in the error field returned by the query
    (the query itself does not throw, per GraphQL design).
    */
  try {
    await API.graphql(graphqlOperation(updateOrder, { input: currentOrder }));
  } catch (err) {
    console.log('Error Services -> updateCar: ', err);
  }
};

export { _getOrdersList, _getOrderById, _updateOrder };
