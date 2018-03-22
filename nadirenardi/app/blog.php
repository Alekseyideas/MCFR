<?php include 'components/head.php' ?>
<?php include 'components/header/header.php' ?>



<main>
	<section class="blog">
		<div class="wrapper">
            <h2 class="section-title">Блог</h2>

            <div class="flex flex--j-right">
	            <?php include 'components/base/pagination.php'?>
            </div>

            <div class="blog__wrapper">
                <?$i=0;while ($i<12): $i++;?>

                    <div class="blog__article">
                        <a  href="article.php" class="blog__article-img"
                            style="background-image: url('assets/img/blog/img_9223.jpg')">
                            <img src="assets/img/blog/img_9223.jpg" alt="img_9223">
                        </a>
                        <a  href="article.php" class="blog__article-title">
                            <span>Q&A: спецпроект Nadi Renardi до Дня святого Валентина</span>
                        </a>
                        <div class="blog__article-footer">
                            <span class="blog__article-cat">Блог Лисички</span>
                            <span class="blog__article-date">20.03.2018</span>
                        </div>
                    </div>

                <?php endwhile;?>

            </div>


            <div class="blog__pagination flex flex--j-right">
				<?php include 'components/base/pagination.php'?>
            </div>

        </div>
	</section>
</main>


<?php include 'components/footer/footer.php' ?>
<?php include 'components/scripts.php' ?>






