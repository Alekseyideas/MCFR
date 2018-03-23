<?php
include 'components/head.php';
include 'components/header/header.php';
?>

<main>
	<section class="room">
		<div class="wrapper">
			<h2 class="section-title" id="curTab">Контакты</h2>
			<div class="room__wrapper">
				<div class="room__left">
					<div class="tab " data-tab="shop">Кошик</div>
					<div class="tab " data-tab="registration">Реєстрація</div>
					<div class="tab active" data-tab="pass">Відновлення пролю</div>
				</div>
				<div class="room__right">
					<div class="tab-info tab-info--shop">

						<div class="page-cart__table">
							<div class="page-cart__table-header">
								<div class="page-cart__tr">
									<div class="page-cart__td"></div>
									<div class="page-cart__td" class="page-cart__product-name">Название</div>
									<div class="page-cart__td">Размер</div>
									<div class="page-cart__td">Цена</div>
									<div class="page-cart__td"></div>
								</div>
							</div>
							<div class="page-cart__table-body">
								<?php
								$i=0;
								while ($i<4):
									$i++;
									include 'components/cart/in-cart-product.php';
								endwhile;
								?>

							</div>
						</div>


						<div class="room__cart-price">
							<div class="room__cart-price-title">Всего</div>
							<div class="room__cart-price-val">15300 грн</div>
						</div>
						
						<div class="room__cart-btns">
							<a href="#" class="room__cart-btn">Очистить</a>
							<a href="#"  class="room__cart-btn callPhone">Купить в 1 клик</a>
							<a href="cart.php"  class="room__cart-btn room__cart-btn--orange">Оформить заказ</a>
						</div>

					</div>
					<div class="tab-info tab-info--registration">

						<form action="" class="room__registration-form">
							<div class="form-group">
								<div class="room__name-field">E-mail *</div>
								<input type="email" name="email" required >
							</div>
							<div class="form-group">
								<div class="room__name-field">Ім'я *</div>
								<input type="text" name="name" required>
							</div>
							<div class="form-group">
								<div class="room__name-field">Прізвище *</div>
								<input type="text" name="surname" required>
							</div>
							<div class="form-group">
								<div class="room__name-field">Телефон *</div>
								<input type="tel" name="phone" class="phoneNumber" required>
							</div>
							<div class="form-group">
								<div class="room__name-field">Дата народження *</div>
								<input type="date" name="date" required>
							</div>
							<div class="form-group">
								<div class="room__name-field">Пароль (мін. 6 символів) *</div>
								<div class="passInputs">
									<input type="password"  name="pass" required>
									<input type="password"  name="pass" required>
								</div>

							</div>

							<div class="reg__footer">

								<label class="flex flex--a-center">
									<input type="checkbox" class="default-checkbox">
									<span>
											Надаю згоду на обробку моїх персональних даних
										</span>
								</label>
								<button type="submit" class="room-btn-registration">Регистрация</button>
							</div>
						</form>

					</div>
					<div class="tab-info tab-info--pass">
						<p>
							Забула свій пароль? Введи свій e-mail, і ми надішлемо тобі код для зміни пароля.
							Якщо ти не забувала пароль, авторизуйся в інтернет-магазині.
						</p>

						<form action="" class="rem-pass">
							<div class="form-group">
								<div class="rem-pass-text">E-mail:</div>
								<input type="email" name="email">
							</div>
							<button type="submit" class="btn-rem-pass">Запит паролю</button>
						</form>

					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<?php include 'components/footer/footer.php' ?>
<?php include 'components/scripts.php' ?>
