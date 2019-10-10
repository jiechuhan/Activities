function MiniBank(initialBalance) {
    this.statement = [initialBalance];
    this.setBalance = function(balance) {
        let newbalance = this.statement[this.statement.length - 1] + balance;
        this.updateStatement(newbalance);
    };
    this.updateStatement = function(num) {
        this.statement.push(num);
    };
    this.getStatement = function() {
        return this.statement;
    };
    this.printStatement = function() {
        this.statement.forEach(item => console.log(item))
    };
    this.deposit = function(deposit) {
        this.setBalance(deposit);
    };
    this.withdraw = function(withdraw) {
        let newestBalance = this.statement[this.statement.length -1] - withdraw;
        this.updateStatement(newestBalance);
    };
}

var minibank = new MiniBank(100)
console.log(minibank.statement)
minibank.setBalance(30)
console.log(minibank.statement)
minibank.deposit(50)
console.log(minibank.statement)
minibank.withdraw(30)
console.log(minibank.statement)
minibank.printStatement()
minibank.getStatement()