import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyBklxp3KTmkThAslNZW2fmXpdVrNVSn4fw';

// Create a new component. This component should produce some HTML
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {videos: []};

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({videos}); // resolves as this.setState({ videos: videos })
		});
	}

	render(){
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
