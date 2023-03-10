import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Привет, меня зовут <em>Даниил</em>
					</strong>
					<br />я frontend разработчик
				</h1>
				<div className="header__text">
					<p>со страстью к обучению и творчеству.</p>
				</div>
			</div>
		</header>
	);
}

export default Header;