import Adapter from './http';

export const DATACENTER_QUERY_PARAM = 'dc';
export default Adapter.extend({
  // TODO: Deprecated, remove `request` usage from everywhere and replace with
  // `HTTPAdapter.rpc`
  request: function(req, resp, obj, modelName) {
    return this.rpc(...arguments);
  },
});
