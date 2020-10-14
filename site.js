var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyadhhZ8Bspu44CM'}).base('apprVULyJMtbkj11z');


base('Memories').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 20,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log(record.get('Description'));
        console.log(record.get('theme'));
        console.log(record.get('location'));
        var desc = record.get('Description');
        var descdiv = document.querySelector("div");
        descdiv.insertAdjacentHTML("afterbegin", desc);




    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
