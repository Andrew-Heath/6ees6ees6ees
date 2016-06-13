import ForagerBee from './ForagerBee';

class RetiredForagerBee extends ForagerBee{
  constructor() {
    super();
    this.age = 40;
    this.job = 'gamble';
  }
};

export default RetiredForagerBee;