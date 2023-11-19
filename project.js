class Vehicle {
  constructor(name, companyName, ID) {
    this.name = name;
    this.companyName = companyName;
    this.ID = ID;
  }
}

class Car extends Vehicle {
  constructor(name, companyName, ID, CarType) {
    super(name, companyName, ID);
    this.CarType = CarType;
  }
}

class Plane extends Vehicle {
  constructor(name, companyName, ID, PlaneType) {
    super(name, companyName, ID);
    this.PlaneType = PlaneType;
  }
}

class Employee {
  constructor(Ename, EID, DoB) {
    this.Ename = Ename;
    this.EID = EID;
    this.DoB = DoB;
  }
}

class Driver extends Employee {
  constructor(Ename, EID, DoB, DriverLicense) {
    super(Ename, EID, DoB);
    this.DriverLicense = DriverLicense;
  }
}

class Pilot extends Employee {
  constructor(Ename, EID, DoB, PilotLicense) {
    super(Ename, EID, DoB);
    this.PilotLicense = PilotLicense;
  }
}

class Reservation {
  constructor(reservationID, vehiclesID, EmployeeID, reservationDate) {
    this.reservationID = reservationID;
    this.vehiclesID = vehiclesID;
    this.EmployeeID = EmployeeID;
    this.reservationDate = reservationDate;
  }
}

// Creating instances of cars
const Emgrand = new Car("Emgrand", "Geely", "1", "gas");
const H1 = new Car("H1", "Hyundai", "2", "gas");
const Elantra = new Car("Elantra", "Hyundai", "3", "gas");

// Creating instances of planes
const AC130 = new Plane("AC-130", "Ward", "01", "jet");
const VTOL = new Plane("VTOL", "Ward", "02", "jet");

// Creating instances of pilot and driver
const P = new Pilot("Fahad", "100", "1999/12/06", "230230");
const D = new Driver("Hassan", "115", "2001/11/25", "111444");

const reservations = [];

function createReservation(EID, ID) {
  let employee;
  let vehicle;

  // Checking for the employee's role and if the vehicle type matches
  if (Pilot.some(pilot => pilot.EID === EID)) {
    employee = Pilot.find(pilot => pilot.EID === EID);
  } else {
    console.log("Error: Employee is not a pilot");
    return;
  }

  if (Car.some(car => car.ID === ID)) {
    vehicle = Car.find(car => car.ID === ID);
    if (vehicle.CarType === "gas") {
      console.log("Error: Vehicle is a car, not a plane");
      return;
    }
  } else if (Plane.some(plane => plane.ID === ID)) {
    vehicle = Plane.find(plane => plane.ID === ID);
  } else {
    console.log("Error: Vehicle not found");
    return;
  }

  const reservation = new Reservation(
    Math.random().toString(10).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    vehicle.ID,
    employee.EID,
    new Date().toLocaleDateString()
  );
  reservations.push(reservation);
  return reservation;
}

console.log(reservations);
