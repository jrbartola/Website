import * as React from 'react';

interface PortfolioCell { title: string, tooltip: string, imageUrl: string, projectUrl: string,
                          description?: string }

interface PortfolioRowProps { leftCell: PortfolioCell, rightCell?: PortfolioCell }

interface PortfolioProps {}
interface PortfolioState { portfolioCells: PortfolioCell[] }

/**
 * Defines the portfolio panel within the main carousel
 */
export class Portfolio extends React.Component<PortfolioProps, PortfolioState> {
	constructor(props) {
		super(props);

		this.state = { portfolioCells: [{ title: "Crypto Backtester",
                                          tooltip: "An open-source cryptocurrency backtesting UI for Coinbase Pro",
                                          imageUrl: "../static/img/backtester.png",
                                          projectUrl: "https://github.com/jrbartola/CryptoBacktester"
                                        },
                                        { title: "Crypto-Signal",
                                          tooltip: "An open-source cryptocurrency notification & analysis system",
                                          imageUrl: "../static/img/cryptosignal.png",
                                          projectUrl: "https://github.com/CryptoSignal/crypto-signal"
                                        },
                                        { title: "Pharmasuitable",
                                          tooltip: "A pharmaceutical health monitoring dashboard for medication magement. Created at Hack UMass V",
                                          imageUrl: "../static/img/pharmasuitable.png",
                                          projectUrl: "https://devpost.com/software/pharmasuitable-shf3cx"
                                        },
                                        { title: "Medicus",
                                          tooltip: "A medical iOS application designed to use image recognition to diagnose various skill ailments. Created at Hack UMass IV",
                                          imageUrl: "../static/img/medicus-iphones.png",
                                          projectUrl: "https://devpost.com/software/medicus"
                                        },
                                        { title: "Scopium",
                                          tooltip: "A mobile health application that uses Arduino sensors to monitor multiple sclerosis symptoms in patients. Created at Hack UMass III",
                                          imageUrl: "../static/img/scopium-iphone.png",
                                          projectUrl: "https://devpost.com/software/scopium"
                                        },
                                        { title: "Wave Calendar",
                                          tooltip: "Don't have anything to do this weekend? Use Wave Calendar, a web application designed to help find parties in your area!",
                                          imageUrl: "../static/img/wavecalendar.jpg",
                                          projectUrl: "https://github.com/jrbartola/WaveCalendar"
                                        },
                                        { title: "Boggle Solver",
                                          tooltip: "Ever wondered what it would look like to find every possible word in a game of Boggle? Think no more!",
                                          imageUrl: "../static/img/boggle.jpg",
                                          projectUrl: "https://github.com/jrbartola/BoggleSolver"
                                        },
                                        { title: "Word Search Solver",
                                          tooltip: "I used to love word searches when I was younger. I decided to use some functional programming concepts to write a program that solves one!",
                                          imageUrl: "../static/img/wordsearch.png",
                                          projectUrl: "https://github.com/jrbartola/Wordsearch-Solver"
                                        }]
		}

	}

	render() {
	    const cells = this.state.portfolioCells;
	    let cellPairs = [];

	    // Group each of the cells into pairs of two
        for (let i = 0; i < cells.length/2; i++) {
            cellPairs.push(cells.slice(2*i, 2*(i+1)));
        }

		return (
			<div id="portfolio">
				<div className="carousel-header">
					<h2>MY WORK</h2>
				</div>
                { cellPairs.map(([leftCell, rightCell], i) =>
                    <PortfolioRow key={i} leftCell={leftCell} rightCell={rightCell} />
                )}
			</div>
		)
	}
}

/**
 * Functional component that renders a portfolio row within the portfolio section
 *
 * @param {PortfolioRowProps} props: Props containing the left and right portfolio cells
 * @constructor
 */
const PortfolioRow = (props: PortfolioRowProps) => {
    return (
        <div className="row">
            <div className="col-md-6 portfolio-left">
                <div className="portfolio-cell-outer" style={{backgroundImage: `url("${props.leftCell.imageUrl}")`}}>
                    <div className="portfolio-cell" >
                        <a href={props.leftCell.projectUrl} target="_blank">
                            <h3 className="portfolio-title">{props.leftCell.title}</h3>
                            {/*<img src={props.leftCell.imageUrl} />*/}
                            <p>{props.leftCell.tooltip}</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 portfolio-right">
                { props.rightCell !== undefined &&
                    <div className="portfolio-cell-outer" style={{backgroundImage: `url("${props.rightCell.imageUrl}")`}}>
                        <div className="portfolio-cell">
                            <a href={props.rightCell.projectUrl} target="_blank">
                                <h3 className="portfolio-title">{props.rightCell.title}</h3>
                                {/*<img src={props.rightCell.imageUrl} />*/}
                                <p>{props.rightCell.tooltip}</p>
                            </a>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};