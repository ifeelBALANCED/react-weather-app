import { SET_ALERT } from '../types';
import {AlertAction} from "../../common/interfaces";

export const setAlert = (message: string): AlertAction => {
  return {
    type: SET_ALERT,
    payload: message
  }
}