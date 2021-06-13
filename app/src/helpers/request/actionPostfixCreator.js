import { POSTFIXES } from "../../constants/actionsPostfixes";

const { REQUEST_POSTFIX } = POSTFIXES;

const createActionWithPostfix = (actionType, payload, postfix) => {
  return {
    type:
      actionType.slice(0, actionType.length - REQUEST_POSTFIX.length) + postfix,
    payload: {
      response: payload.response,
      actionPayload: payload.actionPayload,
    },
  };
};

export default createActionWithPostfix;
