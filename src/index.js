import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import "./App.css";

console.clear();

<script
	async
	src="https://platform.twitter.com/widgets.js"
	charset="utf-8"
></script>;

const quoteAPI =
	"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quotes: [],
			getQ: 0,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		fetch(quoteAPI)
			.then((x) => x.json())
			.then((x) => {
				this.setState({
					quotes: x.quotes,
				});
			});
	}

	handleClick() {
		this.forceUpdate();
	}

	render() {
		let colArr = [
			"#7C77B9",
			"#1D8A99",
			"#0BC9CD",
			"#054A91",
			"#3E7CB1",
			"#E43F6F",
			"#141B41",
			"#6F9CEB",
			"#918EF4",
			"#98B9F2",
			"#094074",
			"#963484",
			"#033860",
			"#004385",
			"#1B3B6F",
			"#0FA3B1",
			"#613F75",
			"#1982C4",
			"#6A5D7B",
			"#546de5",
			"#3dc1d3",
			"#574b90",
			"#c44569",
			"#786fa6",
			"#6D214F",
			"#B33771",
			"#1B9CFC",
			"#25CCF7",
			"#182C61",
			"#3B3B98",
		];
		let randomColor = colArr[Math.floor(Math.random() * colArr.length)];

		$(".randCol").css("color", randomColor);
		$(".rand").css("background-color", randomColor);
		const quotes = this.state.quotes;
		const index = Math.floor(Math.random() * quotes.length);

		const getQ = index;
		let currentQuote = "";
		let currentAuthor = "";
		console.log(quotes);
		if (quotes.length !== 0) {
			currentQuote = quotes[getQ].quote;
			currentAuthor = quotes[getQ].author;
		}
		return (
			<div
				className="d-flex justify-content-center row vh-100 h-100 rand"
				id="quote-box"
			>
				<div className="box my-auto randCol">
					<div className="text" id="text">
						<div className="text-center currQ">{currentQuote}</div>
						<div>
							<hr className="rand" />
						</div>

						<div className="text-center currA" id="author">
							{currentAuthor.toUpperCase()}
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="d-flex justify-content-between">
							<button className="twitter button rand">
								<a
									id="tweet-quote"
									href={`https://twitter.com/intent/tweet?text="${currentQuote}"-${currentAuthor}`}
									target="_blank"
									rel="noreferrer"
								>
									<i className="fa fa-twitter"></i>
								</a>
							</button>
						</div>
						<button
							className="newQuote button rand"
							onClick={this.handleClick}
							id="new-quote"
						>
							{" "}
							New Quote
						</button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));