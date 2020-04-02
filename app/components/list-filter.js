import Component from "@ember/component";

export default Component.extend({
  className: ["list-filter"],
  value: "",

  init() {
    this._super(...arguments);
    // this.filter('').then((results) => this.set('results', results));
    this.filter("").then(allResults => {
      this.set("results", allResults.results);
    });
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.value;
      let filterAction = this.filter;
      // filterAction(filterInputValue).then(filterResults =>
      //   this.set("results", filterResults)
      // );
      filterAction(filterInputValue).then(filterResults => {
        if (filterResults.query === this.value) {
          this.set("results", filterResults.results);
        }
      });
    }
  }
});
