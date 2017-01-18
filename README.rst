querablep
=========

Allows you to ask your promise few questions:

* is it done? (finished, whatever is the result)
* is it resolved? (success)
* is it rejected? (failure)

Usage
-----

.. code:: javascript

  const querablep = require('querablep')

  // Business code
  const peoplePromise = querablep(getPeopleInDatabasePromise());

  peoplePromise.isFulfilled(); // false
  peoplePromise.isRejected();  // false
  peoplePromise.isResoleved(); // false

  peoplePromise

    .catch((e) => {
      peoplePromise.isFulfilled(); // true
      peoplePromise.isRejected();  // true
      peoplePromise.isResoleved(); // false
    })

    .then((people) => {
      peoplePromise.isFulfilled(); // true
      peoplePromise.isRejected();  // false
      peoplePromise.isResoleved(); // true
    });

Credits
-------

This code is a copy/paste from this answer `on Stackoverflow by chuckj`_. But now under AGPL.

.. _`on Stackoverflow by chuckj`: http://stackoverflow.com/a/21489870/1137410
