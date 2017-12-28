// tslint:disable:max-line-length max-file-line-count prefer-const forin prefer-template one-variable-per-declaration newline-before-return
// tslint:disable:binary-expression-operand-order comment-format one-line no-var-keyword object-literal-shorthand
// tslint:disable:variable-name
import { assert } from 'chai';
import { moment } from '../chain';

describe('is same or before', () => {

  it('is same or before without units', function () {
    var m = moment(new Date(2011, 3, 2, 3, 4, 5, 10)), mCopy = moment(m);
    assert.equal(m.isSameOrBefore(moment(new Date(2012, 3, 2, 3, 5, 5, 10))), true, 'year is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2010, 3, 2, 3, 3, 5, 10))), false, 'year is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 4, 2, 3, 4, 5, 10))), true, 'month is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 2, 2, 3, 4, 5, 10))), false, 'month is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 3, 3, 4, 5, 10))), true, 'day is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 1, 3, 4, 5, 10))), false, 'day is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 2, 4, 4, 5, 10))), true, 'hour is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 2, 2, 4, 5, 10))), false, 'hour is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 2, 3, 5, 5, 10))), true, 'minute is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 2, 3, 3, 5, 10))), false, 'minute is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 2, 3, 4, 6, 10))), true, 'second is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 2, 3, 4, 4, 11))), false, 'second is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 2, 3, 4, 5, 10))), true, 'millisecond match');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 2, 3, 4, 5, 11))), true, 'millisecond is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 2, 3, 4, 5, 9))), false, 'millisecond is earlier');
    assert.equal(m.isSameOrBefore(m), true, 'moments are the same as themselves');
    assert.equal(+m, +mCopy, 'isSameOrBefore second should not change moment');
  });

  it('is same or before year', function () {
    var m = moment(new Date(2011, 1, 2, 3, 4, 5, 6)), mCopy = moment(m);
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 5, 6, 7, 8, 9, 10)), 'year'), true, 'year match');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 5, 6, 7, 8, 9, 10)), 'years'), true, 'plural should work');
    assert.equal(m.isSameOrBefore(moment(new Date(2012, 5, 6, 7, 8, 9, 10)), 'year'), true, 'year is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2010, 5, 6, 7, 8, 9, 10)), 'year'), false, 'year is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 0, 1, 0, 0, 0, 0)), 'year'), true, 'exact start of year');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 11, 31, 23, 59, 59, 999)), 'year'), true, 'exact end of year');
    assert.equal(m.isSameOrBefore(moment(new Date(2012, 0, 1, 0, 0, 0, 0)), 'year'), true, 'start of next year');
    assert.equal(m.isSameOrBefore(moment(new Date(2010, 11, 31, 23, 59, 59, 999)), 'year'), false, 'end of previous year');
    assert.equal(m.isSameOrBefore(m, 'year'), true, 'same moments are in the same year');
    assert.equal(+m, +mCopy, 'isSameOrBefore year should not change moment');
  });

  it('is same or before month', function () {
    var m = moment(new Date(2011, 2, 3, 4, 5, 6, 7)), mCopy = moment(m);
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 2, 6, 7, 8, 9, 10)), 'month'), true, 'month match');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 2, 6, 7, 8, 9, 10)), 'months'), true, 'plural should work');
    assert.equal(m.isSameOrBefore(moment(new Date(2012, 2, 6, 7, 8, 9, 10)), 'month'), true, 'year is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2010, 2, 6, 7, 8, 9, 10)), 'month'), false, 'year is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 5, 6, 7, 8, 9, 10)), 'month'), true, 'month is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 6, 7, 8, 9, 10)), 'month'), false, 'month is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 2, 1, 0, 0, 0, 0)), 'month'), true, 'exact start of month');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 2, 31, 23, 59, 59, 999)), 'month'), true, 'exact end of month');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 1, 0, 0, 0, 0)), 'month'), true, 'start of next month');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 27, 23, 59, 59, 999)), 'month'), false, 'end of previous month');
    assert.equal(m.isSameOrBefore(m, 'month'), true, 'same moments are in the same month');
    assert.equal(+m, +mCopy, 'isSameOrBefore month should not change moment');
  });

  it('is same or before day', function () {
    var m = moment(new Date(2011, 1, 2, 3, 4, 5, 6)), mCopy = moment(m);
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 7, 8, 9, 10)), 'day'), true, 'day match');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 7, 8, 9, 10)), 'days'), true, 'plural should work');
    assert.equal(m.isSameOrBefore(moment(new Date(2012, 1, 2, 7, 8, 9, 10)), 'day'), true, 'year is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2010, 1, 2, 7, 8, 9, 10)), 'day'), false, 'year is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 2, 2, 7, 8, 9, 10)), 'day'), true, 'month is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2010, 12, 2, 7, 8, 9, 10)), 'day'), false, 'month is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 3, 7, 8, 9, 10)), 'day'), true, 'day is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 1, 7, 8, 9, 10)), 'day'), false, 'day is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 0, 0, 0, 0)), 'day'), true, 'exact start of day');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 23, 59, 59, 999)), 'day'), true, 'exact end of day');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 3, 0, 0, 0, 0)), 'day'), true, 'start of next day');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 1, 23, 59, 59, 999)), 'day'), false, 'end of previous day');
    assert.equal(m.isSameOrBefore(m, 'day'), true, 'same moments are in the same day');
    assert.equal(+m, +mCopy, 'isSameOrBefore day should not change moment');
  });

  it('is same or before hour', function () {
    var m = moment(new Date(2011, 1, 2, 3, 4, 5, 6)), mCopy = moment(m);
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 8, 9, 10)), 'hour'), true, 'hour match');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 8, 9, 10)), 'hours'), true, 'plural should work');
    assert.equal(m.isSameOrBefore(moment(new Date(2012, 1, 2, 3, 8, 9, 10)), 'hour'), true, 'year is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2010, 1, 2, 3, 8, 9, 10)), 'hour'), false, 'year is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 2, 2, 3, 8, 9, 10)), 'hour'), true, 'month is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2010, 12, 2, 3, 8, 9, 10)), 'hour'), false, 'month is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 3, 3, 8, 9, 10)), 'hour'), true, 'day is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 1, 3, 8, 9, 10)), 'hour'), false, 'day is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 4, 8, 9, 10)), 'hour'), true, 'hour is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 2, 8, 9, 10)), 'hour'), false, 'hour is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 0, 0, 0)), 'hour'), true, 'exact start of hour');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 59, 59, 999)), 'hour'), true, 'exact end of hour');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 4, 0, 0, 0)), 'hour'), true, 'start of next hour');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 2, 59, 59, 999)), 'hour'), false, 'end of previous hour');
    assert.equal(m.isSameOrBefore(m, 'hour'), true, 'same moments are in the same hour');
    assert.equal(+m, +mCopy, 'isSameOrBefore hour should not change moment');
  });

  it('is same or before minute', function () {
    var m = moment(new Date(2011, 1, 2, 3, 4, 5, 6)), mCopy = moment(m);
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 4, 9, 10)), 'minute'), true, 'minute match');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 4, 9, 10)), 'minutes'), true, 'plural should work');
    assert.equal(m.isSameOrBefore(moment(new Date(2012, 1, 2, 3, 4, 9, 10)), 'minute'), true, 'year is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2010, 1, 2, 3, 4, 9, 10)), 'minute'), false, 'year is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 2, 2, 3, 4, 9, 10)), 'minute'), true, 'month is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2010, 12, 2, 3, 4, 9, 10)), 'minute'), false, 'month is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 3, 3, 4, 9, 10)), 'minute'), true, 'day is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 1, 3, 4, 9, 10)), 'minute'), false, 'day is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 4, 4, 9, 10)), 'minute'), true, 'hour is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 2, 4, 9, 10)), 'minute'), false, 'hour is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 5, 9, 10)), 'minute'), true, 'minute is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 3, 9, 10)), 'minute'), false, 'minute is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 4, 0, 0)), 'minute'), true, 'exact start of minute');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 4, 59, 999)), 'minute'), true, 'exact end of minute');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 5, 0, 0)), 'minute'), true, 'start of next minute');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 3, 59, 999)), 'minute'), false, 'end of previous minute');
    assert.equal(m.isSameOrBefore(m, 'minute'), true, 'same moments are in the same minute');
    assert.equal(+m, +mCopy, 'isSameOrBefore minute should not change moment');
  });

  it('is same or before second', function () {
    var m = moment(new Date(2011, 1, 2, 3, 4, 5, 6)), mCopy = moment(m);
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 4, 5, 10)), 'second'), true, 'second match');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 4, 5, 10)), 'seconds'), true, 'plural should work');
    assert.equal(m.isSameOrBefore(moment(new Date(2012, 1, 2, 3, 4, 5, 10)), 'second'), true, 'year is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2010, 1, 2, 3, 4, 5, 10)), 'second'), false, 'year is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 2, 2, 3, 4, 5, 10)), 'second'), true, 'month is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2010, 12, 2, 3, 4, 5, 10)), 'second'), false, 'month is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 3, 3, 4, 5, 10)), 'second'), true, 'day is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 1, 3, 4, 5, 10)), 'second'), false, 'day is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 4, 4, 5, 10)), 'second'), true, 'hour is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 2, 4, 5, 10)), 'second'), false, 'hour is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 5, 5, 10)), 'second'), true, 'minute is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 3, 5, 10)), 'second'), false, 'minute is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 4, 6, 10)), 'second'), true, 'second is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 4, 4, 10)), 'second'), false, 'second is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 4, 5, 0)), 'second'), true, 'exact start of second');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 4, 5, 999)), 'second'), true, 'exact end of second');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 4, 6, 0)), 'second'), true, 'start of next second');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 1, 2, 3, 4, 4, 999)), 'second'), false, 'end of previous second');
    assert.equal(m.isSameOrBefore(m, 'second'), true, 'same moments are in the same second');
    assert.equal(+m, +mCopy, 'isSameOrBefore second should not change moment');
  });

  it('is same or before millisecond', function () {
    var m = moment(new Date(2011, 3, 2, 3, 4, 5, 10)), mCopy = moment(m);
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 2, 3, 4, 5, 10)), 'millisecond'), true, 'millisecond match');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 2, 3, 4, 5, 10)), 'milliseconds'), true, 'plural should work');
    assert.equal(m.isSameOrBefore(moment(new Date(2012, 3, 2, 3, 4, 5, 10)), 'millisecond'), true, 'year is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2010, 3, 2, 3, 4, 5, 10)), 'millisecond'), false, 'year is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 4, 2, 3, 4, 5, 10)), 'millisecond'), true, 'month is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 2, 2, 3, 4, 5, 10)), 'millisecond'), false, 'month is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 3, 3, 4, 5, 10)), 'millisecond'), true, 'day is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 1, 1, 4, 5, 10)), 'millisecond'), false, 'day is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 2, 4, 4, 5, 10)), 'millisecond'), true, 'hour is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 1, 4, 1, 5, 10)), 'millisecond'), false, 'hour is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 2, 3, 5, 5, 10)), 'millisecond'), true, 'minute is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 2, 3, 3, 5, 10)), 'millisecond'), false, 'minute is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 2, 3, 4, 6, 10)), 'millisecond'), true, 'second is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 2, 3, 4, 4, 5)), 'millisecond'), false, 'second is earlier');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 2, 3, 4, 6, 11)), 'millisecond'), true, 'millisecond is later');
    assert.equal(m.isSameOrBefore(moment(new Date(2011, 3, 2, 3, 4, 4, 9)), 'millisecond'), false, 'millisecond is earlier');
    assert.equal(m.isSameOrBefore(m, 'millisecond'), true, 'same moments are in the same millisecond');
    assert.equal(+m, +mCopy, 'isSameOrBefore millisecond should not change moment');
  });

  it('is same with utc offset moments', function () {
    assert.ok(moment.parseZone('2013-02-01T00:00:00-05:00').isSameOrBefore(moment('2013-02-01'), 'year'), 'zoned vs local moment');
    assert.ok(moment('2013-02-01').isSameOrBefore(moment('2013-02-01').utcOffset('-05:00'), 'year'), 'local vs zoned moment');
    assert.ok(
      moment.parseZone('2013-02-01T00:00:00-05:00').isSameOrBefore(moment.parseZone('2013-02-01T00:00:00-06:30'), 'year'),
      'zoned vs (differently) zoned moment'
    );
  });

  /*
  it('is same with invalid moments', function () {
      var m = moment(), invalid = moment.invalid();
      assert.equal(invalid.isSameOrBefore(invalid), false, 'invalid moments are not considered equal');
      assert.equal(m.isSameOrBefore(invalid), false, 'valid moment is not before invalid moment');
      assert.equal(invalid.isSameOrBefore(m), false, 'invalid moment is not before valid moment');
      assert.equal(m.isSameOrBefore(invalid, 'year'), false, 'invalid moment year');
      assert.equal(m.isSameOrBefore(invalid, 'month'), false, 'invalid moment month');
      assert.equal(m.isSameOrBefore(invalid, 'day'), false, 'invalid moment day');
      assert.equal(m.isSameOrBefore(invalid, 'hour'), false, 'invalid moment hour');
      assert.equal(m.isSameOrBefore(invalid, 'minute'), false, 'invalid moment minute');
      assert.equal(m.isSameOrBefore(invalid, 'second'), false, 'invalid moment second');
      assert.equal(m.isSameOrBefore(invalid, 'milliseconds'), false, 'invalid moment milliseconds');
  });
  */
});