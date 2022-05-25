import { defineStore } from "pinia";
import RssParsify from "@saintbull/vue-rss-parsify";

export const useFeedStore = defineStore({
  id: "feed",
  state: () => ({
    _feeds: [],
    _rss: [],
  }),
  getters: {
    feedUrls: (state) => state._feeds.map((feed) => feed.url),
    feeds: (state) => state._feeds,
    rss: (state) => {
      return state._rss;
    }
  },
  actions: {
    setFeed(payload){
      var idx = this._feeds.findIndex(feed=>feed.url === payload.url)
      this._feeds[idx].active = !this._feeds[idx].active
      this._rss = []
      this.setRssFeed()
    },
    addBulkFeed(payload) {
      payload.map((feed) => {
        this._feeds.push(feed);
      });
    },
    async setRssFeed() {
      const flattenDeep = (arr) =>
        arr.flatMap((subArray) =>
          Array.isArray(subArray) ? flattenDeep(subArray) : subArray
        );

      const feedUrls = this._feeds.filter(feed => feed.active).map(feed => feed.url);
      await feedUrls.map(async (url) => {
        const feed = await RssParsify.parseToJSON(url);
        this._rss = flattenDeep([this._rss, feed]);
      });
    },
    getFeedStatus(payload) {
      return this._feeds.find((feed) => feed.url === payload.url && feed.active);
    }
  },
});
