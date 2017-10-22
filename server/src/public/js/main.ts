//import { TransactionModel } from '../../models/Transaction';

$(document).ready(() => {
  $(".btn-target").click(async function () {
    let data = await $.ajax("http://localhost:3000/transactions");

//    $('.row').append(data.description);
    // $('.row').append($('<a>aaaaa</a>').attr('href', data.currency));
  })
});