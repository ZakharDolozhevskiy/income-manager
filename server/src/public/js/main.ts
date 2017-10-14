//import { TransactionModel } from '../../models/Transaction';

$(document).ready(() => {
  $(".get-balance-button").click(async function () {
    let data = await $.ajax("http://localhost:3000/transactions/59e1ccbcfb208c3e9e1bf2a2");

//    $('.row').append(data.description);
    $('.row').append($('<a>aaaaa</a>').attr('href', data.currency));
  })
});