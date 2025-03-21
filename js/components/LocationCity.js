export function toggleLocationCity(cityBtn) {
  cityBtn.classList.toggle('location__city--active');
}

export function updateCityName(locationCityNameEl, cityName) {
  locationCityNameEl.textContent = cityName;
}
