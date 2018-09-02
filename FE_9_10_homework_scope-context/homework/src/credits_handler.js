'use strict';

const message = 'Sory, transaction limit and remaining balance are less than credits you want to take. ' +
  'Transaction aborted!';

function userCard(someIndex) {

  const someCard = {};
  const maxNum = 3;
  const taxes = 0.005;
  const dateTen = 10;

  let options = {
    balance: 100,
    transactionLimit: 100,
    historyLogs: [],
    key: null
  };

  if(someIndex < 1 || someIndex > maxNum) {
    return console.log('Available number  from 1 to 3');
  }
  options.key = someIndex;

  someCard.getCardOptions = () => options;

  someCard.putCredits = amount => {
    trackHistory('Received of credits', amount);
    options.balance += amount;
  };

  someCard.takeCredits = amount => {
    if (options.transactionLimit > amount && options.balance > amount) {
      trackHistory('Withdrawal of credits', amount);
      options.balance -= amount;
    } else {
      console.log(message)
    }
  };

  someCard.setTransactionLimit = limit => {
    trackHistory('Transaction limit change', limit);
    options.transactionLimit = limit;
  };

  someCard.transferCredits = (amount, cardNo) => {
    let withTaxes = amount + amount * taxes;
    if (options.transactionLimit > withTaxes && options.balance > withTaxes) {
      trackHistory('Withdrawal of credits', withTaxes);
      cardNo.putCredits(withTaxes);
      options.balance -= withTaxes;
    } else {
      console.log(message)
    }
  };

  function trackHistory(type, credits) {
    let nowTime = new Date();
    let dd = nowTime.getDate() < dateTen ? '0' + nowTime.getDate() : nowTime.getDate();
    let mm = nowTime.getMonth() + 1 < dateTen ? '0' + (nowTime.getMonth() + 1) : nowTime.getMonth() + 1;
    let hh = nowTime.getHours() < dateTen ? '0' + nowTime.getHours() : nowTime.getHours();
    let mi = nowTime.getMinutes() < dateTen ? '0' + nowTime.getMinutes() : nowTime.getMinutes();
    let sc = nowTime.getSeconds() < dateTen ? '0' + nowTime.getSeconds() : nowTime.getSeconds();
    options.historyLogs.push({
      operationType: type,
      credits: credits,
      operationTime: `${dd}/${mm}/${nowTime.getFullYear()}, ${hh}:${mi}:${sc}`
    })
  }

  return someCard;
}

class UserAccount {

  constructor(name) {
    this.name = name;
    this.cards = [];
  }

  addCard() {
    const maxQuantity = 3;
    if(UserAccount.count <= maxQuantity) {
      this.cards.push(userCard(UserAccount.count));
      UserAccount.count++;
    }
  }

  getCardByKey(key) {
    return this.cards[key-1]
  }

}

UserAccount.count = 1;