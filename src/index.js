class Router {
  constructor() {
    this.cb = () => {}
  }
  beforeEach(cb) {
    if(cb instanceof Function) this.cb = cb
  }
  push(to) {
		this.cb('navigateTo', to);
	}
	replace(to) {
		this.cb('redirectTo', to);
	}
	reLaunch(to) {
		this.cb('reLaunch', to);
	}
	switchTab(to) {
		this.cb('switchTab', to);
	}
	back(delta) {
		// #ifdef H5
		history.back();
		// #endif
		// #ifndef H5
		uni.navigateBack({
			delta
		});
		// #endif
	}
}

export default Router
