var timeArray = ['8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ']

CampCoffee.mathCustomer();
CampCoffee.mathCups();
CampCoffee.mathPounds();

var locationData = [new CampCoffee('Pike Place Market', 14, 55, 1.2, 3.7),
new CampCoffee('Capitol Hill', 32, 48, 3.2, 0.4),
new CampCoffee('Seattle Public Library', 49, 75, 2.6, 0.2),
new CampCoffee('South Lake Union', 35, 88, 1.3, 3.7),
new CampCoffee('Sea-Tac', 68, 124, 1.1, 2.7),
new CampCoffee('Website Sales', 3, 6, 0, 6.7)];

function CampCoffee(location, min, max, cups, pounds) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.cups = cups;
  this.pounds = pounds;
  this.customerHour = [];
  this.cupsHour = [];
  this.poundsHour = [];
};

CampCoffee.prototype.mathCustomer = function() {
  for (var i = 0; i < timeArray.length; i++) {
    this.customerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
  }
};

CampCoffee.prototype.mathPounds = function() {
  for (var i = 0; i < timeArray.length; i++) {
    this.poundsHour.push(this.customerHour[i] * this.pounds);
  }
};

CampCoffee.prototype.mathCups = function() {
  for (var i = 0; i < timeArray.length; i++) {
    this.cupsHour.push((this.customerHour[i] * this.cups));
  }
}

CampCoffee.prototype.renderCustomers = function() {
  var sectionEl = document.getElementById('sectionCustomers');
  var tableEl = document.createElement('table');
  var rowEl = document.createElement('tr');

  var headEl = document.createElement('th');
    headEl.textContent = this.location;
    rowEl.appendChild(headEl);

  for (var i = 0; i < timeArray.length; i++) {
    var dataEl = document.createElement('td');
    dataEl.textContent = this.customerHour[i];
    rowEl.appendChild(dataEl);
  }

  tableEl.appendChild(rowEl);
  sectionEl.appendChild(tableEl);
}

CampCoffee.prototype.renderCups = function() {
  var sectionEl = document.getElementById('sectionCups');
  var tableEl = document.createElement('table');
  var rowEl = document.createElement('tr');

  var headEl = document.createElement('th');
    headEl.textContent = this.location;
    rowEl.appendChild(headEl);

  for (var i = 0; i < timeArray.length; i++) {
    var dataEl = document.createElement('td');
      dataEl.textContent = this.cupsHour[i].toFixed(1);
      rowEl.appendChild(dataEl);
  }

  tableEl.appendChild(rowEl);
  sectionEl.appendChild(tableEl);
}

CampCoffee.prototype.renderPounds = function() {
  var sectionEl = document.getElementById('sectionPounds');
  var tableEl = document.createElement('table');
  var rowEl = document.createElement('tr');

  var headEl = document.createElement('th');
    headEl.textContent = this.location;
    rowEl.appendChild(headEl);

for (var i = 0; i < timeArray.length; i++) {
  var dataEl = document.createElement('td');
  dataEl.textContent = this.poundsHour[i].toFixed(1);
  rowEl.appendChild(dataEl);
}

  tableEl.appendChild(rowEl);
  sectionEl.appendChild(tableEl);
};

function tableDisplay() {
  var sectionEl = document.getElementById('sectionTable');
  var tableEl = document.createElement('table');
  var rowEl = document.createElement('tr');

  var headEl = document.createElement('th');
    headEl.textContent = 'Time of Day: ';
    rowEl.appendChild(headEl);

  for (var i = 0; i < timeArray.length; i++) {
    var dataEl = document.createElement('td');
      dataEl.textContent = timeArray[i];
      rowEl.appendChild(dataEl);
  };

  tableEl.appendChild(rowEl);
  sectionEl.appendChild(tableEl);
};

tableDisplay();
for (var i = 0; i < locationData.length; i++){
  locationData[i].renderPounds();
  locationData[i].renderCups();
  locationData[i].renderCustomers();
};
