// Imports
import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "react-bootstrap/NavLink";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

// Render
export default function Index() {
	return (
		<div>
			<div className="sq-bg">
				{/* Navbar */}
				<Navbar />
				{/* Landing Jumbotron */}
				<Container className="pg-jumbotron center">
					<Row className="padding1">
						<Col>
							<div>
								<Row>
									<Col>
										<h1 className="pg-heading center">
											Building a better world with
											technology
										</h1>
									</Col>
								</Row>
								<Row>
									<Col>
										<p className="pg-heading center">
											We are a group of students committed
											to provide non-profits, startups and
											local businesses with scalable
											technological soultion through
											pro-bono consulting engagements.
										</p>
									</Col>
								</Row>
								<Row>
									<Col className="center">
										<Button
											className="btn-light"
											onClick={() => {
												window.open(
													"https://forms.gle/wpjcYdzbnqvfFm7H7"
												);
											}}
										>
											Get in touch!
										</Button>
									</Col>
								</Row>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div>
				<Container>
					{/* About */}
					<div className="margin1">
						<Row>
							<Col sm={8}>
								<div>
									<Row>
										<Col>
											<h1>About Us</h1>
										</Col>
									</Row>
									<Row>
										<Col>
											<p className="desc">
												BUILD strives to make technology
												easy to use and convenient for
												those who create communities and
												promote public welfare.
											</p>
										</Col>
									</Row>
									<Row>
										<Col>
											<Link
												className="inline-link"
												href="/about"
											>
												Learn more{" "}
												<FontAwesomeIcon
													icon={faChevronRight}
												/>
											</Link>
										</Col>
									</Row>
								</div>
							</Col>
							<Col>
								<div className="center">
									<img src="/img/illustrations/about.svg" />
								</div>
							</Col>
						</Row>
					</div>
					{/* Our Work */}
					<div className="margin2">
						<Row>
							<Col sm={8}>
								<div>
									<Row>
										<Col>
											<h1>Our Work</h1>
										</Col>
									</Row>
									<Row>
										<Col>
											<p className="desc">
												Each semester, our teams work
												with various organizations and
												build cutting-edge solutions for
												a vast array of problems. The
												projects we focus on can range
												from Full-Stack Web Development
												to Software Development.
											</p>
										</Col>
									</Row>
									<Row>
										<Col>
											<Link
												className="inline-link"
												href="/services"
											>
												Learn more{" "}
												<FontAwesomeIcon
													icon={faChevronRight}
												/>
											</Link>
										</Col>
									</Row>
								</div>
							</Col>
							<Col>
								<div className="center">
									<img src="/img/illustrations/services.svg" />
								</div>
							</Col>
						</Row>
					</div>
				</Container>
			</div>
			{/* Some Fun Facts */}
			<div className="diagonal">
				<div className="diagonal-contents center">
					<Container className="padding2">
						<Row>
							<Col>
								<h1 className="stats-title">Some fun facts</h1>
							</Col>
						</Row>
						<Row>
							<Col>
								<div>
									<Row>
										<Col>
											<FontAwesomeIcon
												icon={faUser}
												className="stats-icon"
											/>
										</Col>
									</Row>
									<Row>
										<Col>
											<p className="stats-number">35+</p>
										</Col>
									</Row>
									<Row>
										<Col>
											<p className="stats-base">
												Students
											</p>
										</Col>
									</Row>
								</div>
							</Col>
							<Col>
								<div>
									<Row>
										<Col>
											<FontAwesomeIcon
												icon={faBook}
												className="stats-icon"
											/>
										</Col>
									</Row>
									<Row>
										<Col>
											<p className="stats-number">6+</p>
										</Col>
									</Row>
									<Row>
										<Col>
											<p className="stats-base">Majors</p>
										</Col>
									</Row>
								</div>
							</Col>
							<Col>
								<div>
									<Row>
										<Col>
											<FontAwesomeIcon
												icon={faLaptopCode}
												className="stats-icon"
											/>
										</Col>
									</Row>
									<Row>
										<Col>
											<p className="stats-number">8</p>
										</Col>
									</Row>
									<Row>
										<Col>
											<p className="stats-base">
												Projects
											</p>
										</Col>
									</Row>
								</div>
							</Col>
							<Col>
								<div>
									<Row>
										<Col>
											<FontAwesomeIcon
												icon={faCode}
												className="stats-icon"
											/>
										</Col>
									</Row>
									<Row>
										<Col>
											<p className="stats-number">
												10,000+
											</p>
										</Col>
									</Row>
									<Row>
										<Col>
											<p className="stats-base">
												Lines of Code
											</p>
										</Col>
									</Row>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
			<Container>
				{/* Get Involved */}
				<div className="margin1">
					<Row>
						<Col>
							<h1>Get Involved</h1>
						</Col>
					</Row>
					<Row>
						<Col>
							<p className="desc">
								BUILD is a fantastic way to apply your knowledge
								gained from class to impact lives. We work in
								small teams to build technological solutions for
								nonprofits and local businesses. We are looking
								forward to the growth of BUILD as more people
								get involved. We have applications for business
								and project developers at the beginning of each
								semester.
							</p>
						</Col>
					</Row>
					<Row>
						<Col>
							<Link className="inline-link" href="/apply">
								Learn more{" "}
								<FontAwesomeIcon icon={faChevronRight} />
							</Link>
						</Col>
					</Row>
				</div>
				{/* Where we go */}
				<div className="margin2">
					<Row>
						<Col>
							<h1>Where we go</h1>
						</Col>
					</Row>
					<Row>
						<Col>
							<p className="desc">
								Our members are brilliant students and
								professionals and often end up working for the
								best companies in the industry.
							</p>
						</Col>
					</Row>
					<Row className="center">
						{/* Map over logos */}
						<Col md={4} className="center space">
							<img src="img/logo/msft.svg" />
						</Col>
						<Col md={4} className="center space">
							<img src="img/logo/fb.svg" />
						</Col>
						<Col md={4} className="center space">
							<img src="img/logo/goog.svg" />
						</Col>
						<Col md={4} className="center space">
							<img src="img/logo/Amazon_logo.svg" />
						</Col>
						<Col md={4} className="center space">
							<img src="img/logo/uber.svg" className="logo" />
						</Col>
						<Col md={4} className="center space">
							<img src="img/logo/cisco.svg" className="logo" />
						</Col>
						<Col md={4} className="center space">
							<img src="img/logo/visa.png" className="logo" />
						</Col>
						<Col md={4} className="center space">
							<img src="img/logo/mastercard.svg" />
						</Col>
						<Col md={4} className="center space">
							<img src="img/logo/fidelity.svg" />
						</Col>
						<Col md={4} className="center space ">
							<img src="img/logo/pratt-whitney.svg" />
						</Col>
						<Col md={4} className="center space">
							<img src="img/logo/dell.png" className="logo" />
						</Col>
						<Col md={4} className="center space">
							<img src="img/logo/massmutual.svg" />
						</Col>
						<Col md={4} className="center space">
							<img
								src="img/logo/liberty-mutual.png"
								className="logo"
							/>
						</Col>
						<Col md={4} className="center space">
							<img src="img/logo/payfactors.png" />
						</Col>
						<Col md={4} className="center space">
							<img src="img/logo/blue-cross-blue-shield.png" />
						</Col>
					</Row>
				</div>
			</Container>
			<Footer />
		</div>
	);
}
