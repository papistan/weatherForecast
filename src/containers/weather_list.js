import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine }

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp )
		const humidity = cityData.list.map(weather => weather.main.humidity )
		const pressure = cityData.list.map(weather => weather.main.pressure )

		return (
			<tr key={name}>
				<td>{name}</td>
				<td>
					<Sparklines 

				</td>
			</tr>
		)
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>CITY</th>
						<th>Tempurature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather }; //(ES6) weather: weather
}

export default connect(mapStateToProps)(WeatherList);