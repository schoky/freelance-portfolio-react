const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Контактная информация</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Местоположение</h2>
						<p>Воронеж, Россия</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram / WhatsApp</h2>
						<p>
							<a href="tel:+79051234567">+7 (900) 302-70-35</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:danya.safonov.07@mail.ru">
								danya.safonov.07@mail.ru
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;