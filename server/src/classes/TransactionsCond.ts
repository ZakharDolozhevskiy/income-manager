import * as moment from "moment";

export default class TransactionsCond {
  category: number
  timestamp: RangeOfDates

  constructor(query: { period: string, category: string }, private user: string) {
    query.category && (this.category = Number(query.category));
    query.period && (this.timestamp = this.getTimeCondition(query.period))
  }

  getTimeCondition(shortcutId: string): RangeOfDates {
    let cond = { $gt: -Infinity, $lt: +moment() };

    switch (Number(shortcutId)) {
      case (Period.Today):
        cond.$gt = +moment().startOf('day');
        break;
      case (Period.Week):
        cond.$gt = +moment().startOf('week');
        break;
      case (Period.Month):
        cond.$gt = +moment().startOf('month');
        break;
      case (Period.Year):
        cond.$gt = +moment().startOf('year');
    }

    return cond;
  }
}

interface RangeOfDates {
  $gt: number,
  $lt: number
}

enum Period {
  Today = 0,
  Week = 1,
  Month = 2,
  Quarter = 3,
  Year = 4
}