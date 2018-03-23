<div class="main-menu">
	<div class="mobile-search">
		<form action="">
			<input type="text" placeholder="Поиск по сайту ....">
			<button class="mobile-search__btn">
				<ion-icon class="ion-ios-search-strong"></ion-icon>

			</button>
		</form>
	</div>
	<ul class="main-menu__items">

        <?php $catLink = 'category.php'?>

		<li><a href="contacts.php?menu=shops">Магазины</a></li>
		<li><a href="<?echo $catLink?>">Ws18</a></li>
		<li><a href="<?echo $catLink?>">Marshmallow</a></li>
		<li><a href="<?echo $catLink?>">Зима17</a></li>
		<li><a href="<?echo $catLink?>">Осень17</a></li>
		<li><a href="<?echo $catLink?>">Лукбук</a></li>
		<li><a href="<?echo $catLink?>">Платья</a></li>
		<li><a href="<?echo $catLink?>">Пальто</a></li>
		<li><a href="<?echo $catLink?>">Sale</a></li>
		<li><a href="about.php">Про нас</a></li>
		<li>
			<a href="blog.php">Блог</a>
			<ul>
				<li><a href="blog.php">Lorem  1</a></li>
				<li><a href="blog.php">Lorem  2</a></li>
				<li><a href="blog.php">Lorem  3</a></li>
			</ul>
		</li>
		<li><a href="contacts.php">Контакты</a></li>
	</ul>

	<div class="mobile-menu__footer">
		<div class="mobile-menu__social-links">
			<a href="#"><ion-icon class="ion-social-facebook"></ion-icon></a>
			<a href="#"><i class="fab fa-instagram"></i></a>
			<a href="#"><i class="fab fa-pinterest-p"></i></a>
		</div>
		<a href="mailto:nadirenardi@gmail.com" class="mobile-menu__mailTo">nadirenardi@gmail.com</a>
	</div>
</div>