
window.onload = () => {
	const ironhackBCN = {
		lat:19.4004717,
		lng: -99.1760847
	};

	const markers = [];

	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: ironhackBCN
	});

	let center = {
		lat: undefined,
		lng: undefined
	};



	function placeRestaurants(restaurants){
		restaurants.forEach(function(restaurant){
			const center = {
				lat: restaurant.location.coordinates[1],
				lng: restaurant.location.coordinates[0]
			};
			const pin = new google.maps.Marker({
				position: center,
				map: map,
				title: restaurant.name
			});
			markers.push(pin);
		});
	}



	function getRestaurants() {
		axios.get("/restaurants/api")
			.then( response => {
				placeRestaurants(response.data.restaurants);
			})
			.catch(error => {
				console.log(error);
			})
	}

	getRestaurants();

};


