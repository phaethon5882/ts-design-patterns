(() => {
  class PlumbingSystem {
    setPressure(v: number) {}
    turnOn() {}
    turnOff() {}
  }

  class ElectricSystem {
    setVoltage(v: number) {}
    turnOn() {}
    turnOff() {}
  }

  class House {
    private readonly plumbing = new PlumbingSystem();
    private readonly electrical = new ElectricSystem();

    turnOnSystems() {
      this.electrical.setVoltage(120);
      this.electrical.turnOn();

      this.plumbing.setPressure(500);
      this.plumbing.turnOn();
    }

    shutDown() {
      this.plumbing.turnOff();
      this.electrical.turnOff();
    }
  }

  const client = new House();
  client.turnOnSystems();
  client.shutDown();
})();
