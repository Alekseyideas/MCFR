<header class="header">
	<div class="wrapper">
		<div class="flex">
			<div class="col-xs-4">
				<button class="btn-menu" id="bar">
					<span class="btn-menu__line"></span>
					<span class="btn-menu__line"></span>
					<span class="btn-menu__line"></span>
				</button>

				<a href="#" class="header__shops flex flex--j-space">
					<span class="header__shops-text">Магазины</span>
					<span class="header__shops-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </span>
				</a>
				<form action="" class="header__search">
					<div class="flex flex--a-center">
						<label>
							<input type="search" placeholder="Поиск">
						</label>
						<button class="header__btn-search" type="submit">
							<ion-icon class="ion-ios-search-strong"></ion-icon>

						</button>
					</div>

				</form>
			</div>
			<div class="col-xs-4">
				<a href="/" class="header__logo">
					<img src="assets/img/logos/old-logo.svg" alt="old-logo">
				</a>
			</div>
			<div class="col-xs-4 flex flex--j-right">
				<div class="header__right-side flex flex--a-center flex--j-space">
					<a href="#" class="header__icon">
						<i class="far fa-user"></i>
					</a>
					<a href="#" class="header__icon">
						<i class="far fa-heart"></i>
					</a>
					<a href="#" class="header__icon header__icon--cart">
						<ion-icon class="ion-bag"></ion-icon>

						<span class="count">0</span>
					</a>

					<div class="header__select header__select--language flex flex--a-center">
						<span id="currentLang"></span>
						<ion-icon class="ion-arrow-down-b"></ion-icon>
						<ul class="header__select-items">
							<li><a href="#" class="active">Рус</a></li>
							<li><a href="#">Укр</a></li>
							<li><a href="#">Eng</a></li>
						</ul>
					</div>



					<div class="header__select header__select--currency flex flex--a-center">
						<span id="currentCurrency"></span>
						<ion-icon class="ion-arrow-down-b"></ion-icon>
						<ul class="header__select-items">
							<li><a href="#" class="active">Uah</a></li>
							<li><a href="#">Eur</a></li>
							<li><a href="#">Usd</a></li>
						</ul>
					</div>

				</div>
			</div>
		</div>

		<?include 'menu.php'?>

	</div>
</header>