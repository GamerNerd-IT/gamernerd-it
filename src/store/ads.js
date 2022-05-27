import { defineStore } from "pinia";

export const useAdsStore = defineStore({
  id: "ads",
  state: () => ({
    _ads: [
      {
        iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=gamernerd-21&language=it_IT&o=29&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09SGDQXXQ&linkId=4ba32ae1660c60865e54cb890c7a6cf6"></iframe>'
      }
    ],
  }),
  getters: {
    ads: (state) => state._ads,
  },
  actions: {
    addAd(payload) {
      this._ads.push(payload);
    }
  },
});