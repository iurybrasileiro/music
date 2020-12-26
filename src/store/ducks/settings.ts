import { Reducer } from 'redux';
import { action as dispatch, Action } from 'typesafe-actions';

/**
 * Action Types
 */

export enum ISettingsTypes {
  SETTINGS_UPDATE = '@settings/SETTINGS_UPDATE',
}

/**
 * State type
 */

export interface ISettingsState {
  mode: 'dark' | 'light';
}

const INITIAL_STATE: ISettingsState = {
  mode: 'dark',
};

/**
 * Actions
 */

export const settingsUpdate = (payload: Partial<ISettingsState>): Action =>
  dispatch(ISettingsTypes.SETTINGS_UPDATE, payload);

/**
 * Reducer
 */

const reducer: Reducer<ISettingsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ISettingsTypes.SETTINGS_UPDATE:
      return { ...INITIAL_STATE, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
