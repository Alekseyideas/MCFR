<?php include 'components/head.php' ?>
<?php include 'components/header/header.php' ?>
<main>
	<h2 class="section-title">Платья</h2>

	<section class="category">
        <div class="wrapper">
            <div class="category__filter-pagination">
                <?php include 'components/page-category/filter.php'?>
                <?php include 'components/base/pagination.php'?>
            </div>
        </div>
	<div class="wrapper wrapper--category">
		<?php
			$i=0;
			while($i<15):
				$i++;
				include 'components/base/product.php';
			endwhile;
		?>
	</div>

        <div class="category__pagination">
            <div class="wrapper">
                <div class="flex flex--j-right">
					<?php include 'components/base/pagination.php'?>
                </div>
            </div>
        </div>

	</section>

</main>
<?php include 'components/footer/footer.php' ?>
<?php include 'components/scripts.php' ?>