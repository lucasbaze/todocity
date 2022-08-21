import { eventMetaKeys, eventMetaValues, events } from './constants';

export const purchasePreOrder = () => {
  window.dataLayer?.push({
    event: events.PURCHASE,
    [eventMetaKeys.PURCHASE_PRODUCT]: eventMetaValues.PRE_ORDER,
  });
};

export const login = () => {
  window.dataLayer?.push({
    event: events.LOGIN,
  });
};

export const signup = () => {
  window.dataLayer?.push({
    event: events.SIGN_UP,
  });
};

export const logout = () => {
  window.dataLayer?.push({
    event: events.LOGOUT,
  });
};

export const buttonClick = (
  buttonName: string,
  params?: Record<string, string>
) => {
  window.dataLayer?.push({
    event: events.CLICK,
    button_name: buttonName,
    ...params,
  });
};
