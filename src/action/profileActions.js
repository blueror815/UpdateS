import * as types from './actionNames';

/**
 * Triggered when report form text changes
 */
export function updateReportText(text) {
  return {
    type: types.UPDATE_REPORT_TEXT,
    text
  };
}
