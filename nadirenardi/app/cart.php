<?php include 'components/head.php' ?>
<?php include 'components/header/header.php' ?>
<main>
	<section class="page-cart">
		<h2 class="section-title">Твоє замовлення</h2>

		<div class="wrapper">
			<div class="page-cart__wrapper">
				<div class="page-cart__left">
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
				</div>
				<div class="page-cart__right">
					<h3 class="page-cart__right-text">Всего:</h3>
					<h2 class="page-cart__right-price">10 552 грн</h2>
				</div>
			</div>


			<h2 class="section-title">Доставка</h2>


			<div class="page-cart__info">
				<div class="page-cart__info-row">
					<label class="page-cart__info-radio">
						<input type="radio" name="delivery" checked>
						<span class="flex flex--j-space flex--a-center">
							<div class="page-cart__info-title">Шоурум у Києв <a href="#" class="info-icon"><i class="ion-information-circled"></i></a></div>
							<span class="plusDel">+0 грн</span>

						</span>

					</label>

					<div class="page-cart__info-fields">
						<textarea name="" id="" cols="30" rows="10" placeholder="Коментарий"></textarea>
					</div>
				</div>

				<div class="page-cart__info-row">
					<label class="page-cart__info-radio">
						<input type="radio" name="delivery">
						<div class="flex flex--j-space flex--a-center">

							<div class="page-cart__info-title">
								Кур'єрська доставка-примірка по Києву
								<a href="#" class="info-icon">
									<i class="ion-information-circled"></i>
								</a>
							</div>

							<span class="plusDel">+0 грн</span>
						</div>
					</label>

					<div class="page-cart__info-fields">
						<input type="text" placeholder="Улица">
						<input type="text" placeholder="Дом/квартира">
					</div>
				</div>


				<div class="page-cart__info-row">
					<label class="page-cart__info-radio">
						<input type="radio" name="delivery">
						<div class="flex flex--j-space flex--a-center">
							<div class="page-cart__info-title">
								Новая почта
								<a href="#" class="info-icon">
									<i class="ion-information-circled"></i>
								</a>
							</div>
							<span class="plusDel">+0 грн</span>
						</div>
					</label>

					<div class="page-cart__info-fields">
						<input type="text" placeholder="Область">
						<input type="text" placeholder="Город">
						<input type="text" placeholder="Отделение">
						<input type="text" placeholder="Номер телефона" class="phoneNumber">
					</div>
				</div>

			</div>

			<h2 class="section-title">Оплата</h2>

			<div class="page-cart__info">

				<div class="page-cart__info-row">
					<label class="page-cart__info-radio">
						<input type="radio" name="payment"  checked>
						<div class="page-cart__info-title">Готівкою при отриманні  <a href="#" class="info-icon"><i class="ion-information-circled"></i></a></div>
					</label>
				</div>
				<div class="page-cart__info-row">
					<label class="page-cart__info-radio">
						<input type="radio" name="payment">
						<div class="page-cart__info-title">Післяплатою Нової пошти   <a href="#" class="info-icon"><i class="ion-information-circled"></i></a></div>
					</label>
				</div>
				<div class="page-cart__info-row">
					<label class="page-cart__info-radio">
						<input type="radio" name="payment">
						<div class="page-cart__info-title">Оплата карткою  <a href="#" class="info-icon"><i class="ion-information-circled"></i></a></div>
					</label>
				</div>

			</div>



			<div class="page-cart__total-price">
				<span class="page-cart__total-text">Всего:</span>
				<span class="page-cart__total-val">10 546 грн</span>
			</div>


			<a href="#" class="page-cart__btn-confirm">Заказ подтверждаю</a>


		</div>

	</section>
</main>
<?php include 'components/footer/footer.php' ?>
<?php include 'components/scripts.php' ?>