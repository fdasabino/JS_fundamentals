"use strict";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

class Workout {
  date = new Date();
  id = (Date.now() + "").slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; // // [lat, lng]
    this.distance = distance; // //  in km
    this.duration = duration; // // in min
  }
}

class Running extends Workout {
  type = "running";
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  type = "cycling";
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// * APPLICATION ARCHITECTURE
const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    this._getPosition();
    form.addEventListener("submit", this._newWorkout.bind(this));
    inputType.addEventListener("change", this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () => {
        console.log("Could not get your position");
      });
    }
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];

    // // Leaflet code
    this.#map = L.map("map").setView(coords, 13);
    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // // handles click on map
    this.#map.on("click", this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }

  _newWorkout(e) {
    e.preventDefault();

    // helper function to check if data is valid
    const validInputs = (...inputs) =>
      inputs.every((inp) => Number.isFinite(inp));

    // helper function to check if numbers are positive
    const checkPositives = (...inputs) => inputs.every((inp) => inp > 0);

    //  get data from form
    const type = inputType.value;
    const distance = Number(inputDistance.value);
    const duration = Number(inputDuration.value);
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // if workout is running, create running obj
    if (type === "running") {
      const cadence = Number(inputCadence.value);

      // check if data is valid
      if (
        !validInputs(distance, duration, cadence) ||
        !checkPositives(distance, duration, cadence)
      ) {
        return alert("Inputs must be positive numeric values");
      }
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // if workout is cycling, create cycling obj
    if (type === "cycling") {
      const elevation = Number(inputElevation.value);

      //  check if data is valid
      if (
        !validInputs(distance, duration, elevation) ||
        !checkPositives(distance, duration)
      ) {
        return alert("Inputs must be positive numeric values");
      }
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // add new obj to workout array
    this.#workouts.push(workout);
    console.log(workout);

    // render workout on map as marker
    this.renderWorkoutMarker(workout);

    // clear input fields
    inputDistance.value = "";
    inputDuration.value = "";
    inputCadence.value = "";
    inputElevation.value = "";

    // re focus input
    inputDistance.focus();
  }

  // render workout
  renderWorkoutMarker(workout) {
    const options = {
      maxWidth: 250,
      minWidth: 100,
      autoClose: false,
      closeOnClick: false,
      className: `${workout.type}-popup`,
    };
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(L.popup(options))
      .setPopupContent(`${workout.type} ${workout.distance}Km`)
      .openPopup();
  }
}
const app = new App();
