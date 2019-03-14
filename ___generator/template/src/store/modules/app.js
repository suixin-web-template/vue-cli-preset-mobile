/**
 * Created by liubingwen on 2017/12/19.
 */
import Cookie from "js-cookie";
import { getClientHeight } from "@/utils/index";
import { TOKEN } from "@/config";
import { Toast } from "vant";
export default {
  state: {
    token: Cookie.get(TOKEN),
    isLoading: false,
    showMask: false,
    height: getClientHeight(),
  },
  mutations: {
    updateClientHeight(state) {
      state.height = getClientHeight();
    },
    updateLoadingStatus(state, payload) {
      state.isLoading = payload;
    },
    toggleMask(state, payload) {
      state.showMask = payload;
    },
    toggleMaskAndLoading(state, payload) {
      state.showMask = payload;
      state.isLoading = payload;
    }
  },
  actions: {
    showLoading(context, message) {
      Toast.loading({
        message: message || "加载中...",
        duration: 0,
        forbidClick: true
      });
      context.commit("toggleMask", true);
      context.commit("updateLoadingStatus", true);
    },
    hideLoading(context) {
      Toast.clear();
      context.commit("toggleMask", false);
      context.commit("updateLoadingStatus", false);
    }
  }
};