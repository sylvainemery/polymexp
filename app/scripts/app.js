(function (document) {
  'use strict';

  var app = document.querySelector('#app');
  var DEFAULT_ROUTE = "home";
  var globals;

  app.addEventListener('template-bound', function(e) {
    // Use URL hash for initial route. Otherwise, use the first page.
    this.route = this.route || DEFAULT_ROUTE;

    app.$.additemform.addEventListener('additem', function(e) {
      console.log(e.type, e.detail);
      app.onAddItem(e.detail);
    });
    globals = app.$.globals;
  });

  app.menuItemSelected = function(e, detail, sender) {
    if (detail.isSelected) {
      document.querySelector('#scaffold').closeDrawer();
    }
  };

  app.onAddItem = function(item) {
    // find the date first
    for (var i = 0; i < globals.dateArray.length && globals.dateArray[i].dateValue.valueOf() < item.date.valueOf(); i++) {}
      if (i < globals.dateArray.length && globals.dateArray[i].dateValue.valueOf() != item.date.valueOf()) {
        // add a new date somewhere in the middle of the array
        globals.dateArray.splice(i, 0, {
          dateValue: item.date,
          label: item.date.toDateString(),
          dayList: new Array()
        });
      }
      else if (i >= globals.dateArray.length) {
        //add a new date at the end of the array
        globals.dateArray.push({
          dateValue: item.date,
          label: item.date.toDateString(),
          dayList: new Array()
        });
      }

      //add the new item
      for (var j = 0; j < globals.dateArray[i].dayList.length && globals.dateArray[i].dayList[j].timeOfDay.value < item.timeOfDay.value; j++) {}
        if (j < globals.dateArray[i].dayList.length && globals.dateArray[i].dayList[j].timeOfDay.value != item.timeOfDay.value) {
          // add a new timeofday somewhere in the middle of the array
          globals.dateArray[i].dayList.splice(j, 0, {
            timeOfDay: item.timeOfDay,
            items: new Array()
          });
        }
        else if (j >= globals.dateArray[i].dayList.length) {
          //add a new timeofday at the end of the array
          globals.dateArray[i].dayList.push({
            timeOfDay: item.timeOfDay,
            items: new Array()
          });
        }
        //add a new item
        globals.dateArray[i].dayList[j].items.push({
          name: item.name
        });

        console.log('item added');
        this.route = "list";
      };




// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
