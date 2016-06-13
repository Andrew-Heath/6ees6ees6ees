import Bee from './Bee'

class ForagerBee extends Bee{
  constructor() {
    super();
    this.age = 10;
    this.job = 'find pollen';
  }
};

export default ForagerBee;