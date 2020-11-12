import SharedLib from '../lib/shared.js';

(function(k, factory) {
  'use strict';

  factory(new Kluginn.default({
    namespace: "kplugin-copiable-field"
  }));

})(kintone, function(p, info){

  const shared_lib = new SharedLib();

  var K = p;
  var $ = K.$;
  var S = {
    config: K.config.fetch()
  };

  K.init().then(main);

  /* Put kintone-event listener on top level.
   *
   * K.$k.events.on()
   */

  function main(){
  }

  // レコード追加・編集画面
  K.$k.events.on(["app.record.edit.show", "app.record.create.show"], function (event) {

    let fields = S.config.json.table;
    let record = event.record;

    fields.forEach(function(field){
      let k = field.target;
      if (record.hasOwnProperty(k)) {
        record[k].disabled = false;
        K.debug.log(k + ' FORCEFULLY enabled');
      }
    });

    return event;
  });



});
