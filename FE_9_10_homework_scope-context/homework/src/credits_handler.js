function userCard(passIndex) {
  var monthArray = ['01','02','03','04','05','06','07','08','09','10','11','12'];
  var balance = 100;
  var transactionLimit = 100;
  var historyLogs = [];
  var maxNum = 3;
  if(passIndex > maxNum || passIndex < 1){
    return console.log('Available number  from 1 to 3');
  }
  var key = passIndex;
  return{
    getCardOptions: function() {
      return {
        balance : balance,
        transactionLimit : transactionLimit,
        historyLogs :  historyLogs,
        key : key
      }

    },
    putCredits: function(amount) {
      var datePutCredits = new Date();
      balance += amount;
      historyLogs.push({
        operationType : 'Received credits',
        credits:amount,
        operationTime: datePutCredits.getDate() + '/' + monthArray[datePutCredits.getMonth()] + '/'
          + datePutCredits.getFullYear() + ', ' + datePutCredits.getHours() + ':'
          + datePutCredits.getMinutes() + ':' + datePutCredits.getSeconds()
      });
    },
    takeCredits: function(amount) {
      var dateTakeCredits = new Date();
      if(amount < balance && amount < transactionLimit){
        balance -= amount;
        historyLogs.push({
          operationType : 'Withdrawal of credits',
          credits:amount,
          operationTime: dateTakeCredits.getDate() + '/' + monthArray[dateTakeCredits.getMonth()] + '/'
            + dateTakeCredits.getFullYear() + ', ' + dateTakeCredits.getHours() + ':'
            + dateTakeCredits.getMinutes() + ':' + dateTakeCredits.getSeconds()
        });
      } else {
        console.log('Balance or transaction limit is lowest than credit!');
      }

    },
    setTransactionLimit: function(amount) {
      var dateTranactionLimit = new Date();
      transactionLimit = amount;
      historyLogs.push({
        operationType : 'Transaction limit change',
        credits:amount,
        operationTime: dateTranactionLimit.getDate() + '/' + monthArray[dateTranactionLimit.getMonth()] + '/'
          + dateTranactionLimit.getFullYear() + ', ' + dateTranactionLimit.getHours() + ':'
          + dateTranactionLimit.getMinutes() + ':' + dateTranactionLimit.getSeconds()
      });
    },
    transferCredits: function(amount, recepient) {
      var tax = 0.5;
      var assitedValue = 100;
      var taxValue = amount*tax/assitedValue;
      if(amount < balance && amount < transactionLimit){
        recepient.putCredits(amount-taxValue);
        balance -= amount;
      } else {
        console.log('Balance or transaction limit is lowest than credit!');
      }

    }
  }

}



class UserAccount {

  constructor(name) {
    this.name = name;
    this.cards = [];
  }

  addCard() {
    const len = 3;
    if(UserAccount.count <= len){
      this.cards.push(userCard(UserAccount.count));
      UserAccount.count++;
    }
  }

  getCardByKey(key) {
    let modKey = key - 1;
    return this.cards[modKey];
  }

}

UserAccount.count = 1;