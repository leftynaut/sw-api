class AppController {
}

const appComponent = {
  template: `
        <div class="container-fluid">
          <div class="col-xs-4">
            <searchbox></searchbox>
          </div>
          <div class="col-xs-8">
            <ui-view></ui-view>
          </div>
        </div>
    `,
  controller: AppController
};

export default appComponent;
