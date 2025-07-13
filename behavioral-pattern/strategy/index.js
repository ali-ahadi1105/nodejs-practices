// define strategy
class ShippingStrategy {
  calculate(order) {
    throw new Error(`This method must be implemented!`);
  }
}

class StandardStrategy extends ShippingStrategy {
  calculate(order) {
    const baseCost = 5;
    const distanceCost = order.distance * 0.5;
    const weightCost = order.weight * 0.2;
    return baseCost + distanceCost + weightCost;
  }
}

class ExpressShipping extends ShippingStrategy {
  calculate(order) {
    const baseCost = 10;
    const distanceCost = order.distance * 1;
    const weightCost = order.weight * 0.5;
    return baseCost + distanceCost + weightCost;
  }
}

class FreeShipping extends ShippingStrategy {
  calculate(order) {
    if (order.total >= 100) {
      return 0;
    } else {
      return 20;
    }
  }
}

// define context
class ShippingContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculateShipping(order) {
    return this.strategy.calculate(order);
  }
}


// use the strategy
const order = {
  total: 80,
  weight: 5,
  distance: 30
};

function chooseStrategy(order) {
  if (order.total >= 100) {
    return new FreeShipping();
  } else if (order.distance < 20) {
    return new StandardStrategy();
  } else {
    return new ExpressShipping();
  }
}

const autoStrategy = chooseStrategy(order);
const shippingContext = new ShippingContext(autoStrategy);

console.log(`Shipping Cost: $${shippingContext.calculateShipping(order)}`);

