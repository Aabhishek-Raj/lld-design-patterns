// Depend on abstractions, not concrete implementations

class MySQLDatabase {
  save(data: any) {}
}

class UserServicBad {
  private db = new MySQLDatabase();

  save(user: any) {
    this.db.save(user);
  }
}

// DIP in OOP (Abstractions + Injection)
// Easy to swap DB
// Easy to test (mock DB)
interface Database {
  save(data: any): void;
}

class MySQLDatabas implements Database {
  save(data: any) {}
}

class MongoDatabase implements Database {
  save(data: any) {}
}

class UserServic {
  constructor(private db: Database) {}

  save(user: any) {
    this.db.save(user);
  }
}

// New keyword inside business logic is a DIP smell

// Testability (DIP’s Superpower)
// OOP Test
class FakeDatabase implements Database {
  save(data: any) {}
}

const service = new UserServic(new FakeDatabase())

