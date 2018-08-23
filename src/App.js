import React, { Component } from 'react';
import kyles from "./kyle.json"
import Nav from "./components/Nav";
import Container from './components/Container';
import Picture from './components/Picture';
import { width } from 'window-size';


class App extends Component {

	
	state = {
		lost: false,
		kyles,
		score: 0
	};

	handleClick = event => {
		
		const  clicked = event.target.dataset.clicked;
		const index = parseFloat(event.target.dataset.index)
		console.log({ clicked, index });

		function shuffle(array) {
			var m = array.length, t, i;
		  
			// While there remain elements to shuffle…
			while (m) {
		  
			  // Pick a remaining element…
			  i = Math.floor(Math.random() * m--);
		  
			  // And swap it with the current element.
			  t = array[m];
			  array[m] = array[i];
			  array[i] = t;
			}
		  
			return array;
		}
		
		if (clicked == "false") {
			console.log("false")
			var winData = kyles.map(kahl => {
				if(kahl.id == index) {
				   return Object.assign({}, kahl, {clicked: true})
				}
				return kahl
			});

			let oldscore = this.state.score
			let newscore = oldscore+1
			
			console.log(newscore)

			this.setState({
				score: newscore,
				kyles: shuffle(winData)
			})
			console.log(this.state.kyles)
		} else if (clicked == "true") {
			console.log("true")

			let loseData = kyles.map(kahl => {
				return Object.assign({}, kahl, {clicked: false})
			})

			let newscore = 0

			this.setState({
				kyles: shuffle(loseData),
				score: newscore
			})
		}

		
	}
	
	render() {
		return (
			<div>
				<Nav
					score={this.state.score}
				/>
				<Container>
					{this.state.kyles.map(kyle => (
						<Picture
							index={kyle.id}
							source={kyle.image}
							clicked={kyle.clicked}
							handleClick={this.handleClick}
						/>
					))}
				</Container>			
			</div>
		);
	}
}

export default App;
