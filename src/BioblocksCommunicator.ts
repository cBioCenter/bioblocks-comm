export class BioblocksCommunicator {
  public static getInstance() {
    if (!this.instance) {
      this.instance = new BioblocksCommunicator();
    }

    return this.getInstance;
  }

  private static instance: BioblocksCommunicator | null = null;

  protected events: Record<string, GENERIC_FUNCTION[]> = {};

  private constructor() {
    console.log('hoi');
  }

  public dispatchEvent(eventName: string) {
    for (const fn of this.events[eventName]) {
      fn();
    }
  }

  public addEventListener(eventName: string, fn: GENERIC_FUNCTION) {
    if (this.events[eventName]) {
      this.events[eventName].push(fn);
    } else {
      this.events[eventName] = [fn];
    }
  }
}
