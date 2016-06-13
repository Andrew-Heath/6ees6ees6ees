import ForagerBee from './ForagerBee';

class RetiredForagerBee extends ForagerBee{
  constructor() {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }
};

export default RetiredForagerBee;