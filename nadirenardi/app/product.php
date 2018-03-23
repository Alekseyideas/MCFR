<?php include 'components/head.php' ?>
<?php include 'components/header/header.php' ?>

<main>
	<section class="full-product">
		<div class="wrapper">
			<div class="full-product__wrapper">
				<div class="full-product__left">
                    <div class="flex flex--a-top">
                        <div class="full-product__slider">
		                    <?php $i=0; while($i<6):
                                $i++ ;
                                $img = 'product.jpg';

                                if($i===2) {$img = 'img_1368.jpg';}
                                if($i===3) {$img = 'img_9635.jpg';}
                                if($i===4) {$img = 'img_9760.jpg';}
                                if($i===5) {$img = 'capture-one-catalog0418.jpg';}
                                if($i===6) {$img = 'img_9635.jpg';}

                                ?>

                                <div class="full-product__item clickable" data-pos="<?echo $i?>">
                                    <img src="assets/img/product/<?echo $img?>" alt="product">
                                </div>
		                    <?php endwhile;?>
                        </div>
                        <div class="full-product__imgs">
                            <div class="full-product__large-photo">
                                <div class="nav-photo nav-photo--top">
                                    <button class="prev-photo"><i class="ion-ios-arrow-left"></i></button>
                                    <button class="close-photo"><i class="ion-close"></i></button>
                                    <button class="next-photo"><i class="ion-ios-arrow-right"></i></button>
                                </div>

                                <img src="" alt="">

                                <div class="nav-photo nav-photo--bottom">
                                    <button class="prev-photo"><i class="ion-ios-arrow-left"></i></button>
                                    <button class="close-photo"><i class="ion-close"></i></button>
                                    <button class="next-photo"><i class="ion-ios-arrow-right"></i></button>
                                </div>

                            </div>
                            <div class="full-product__img clickable" data-pos="1">
                                <img src="assets/img/product/product.jpg" alt="">
                            </div>

                            <div class="full-product__img clickable" data-pos="2">
                                <img src="assets/img/product/img_1368.jpg" alt="">
                            </div>
                        </div>
                    </div>



                    <h2 class="section-title">ТЕБЕ МОЖЕТ ПОНРАВИТЬСЯ</h2>
                    <div class="may-like owl-carousel">
						<?php include 'components/base/product.php'?>
						<?php include 'components/base/product.php'?>
						<?php include 'components/base/product.php'?>
                    </div>


                    <h2 class="section-title">ПРОСМОТРЕННЫЕ ТОВАРЫ</h2>
                    <div class="may-like owl-carousel">
						<?php include 'components/base/product.php'?>
						<?php include 'components/base/product.php'?>
						<?php include 'components/base/product.php'?>
                    </div>

				</div>

				<div class="full-product__right">
                    
                    <div class="full-product__discount"></div>
                    <span class="full-product__discount-text">-40%</span>
					<div class="full-product__article">
						<span>Артикул: 201551</span>
					</div>
					<h1 class="full-product__title">Платье AVE MARIA</h1>
					<a href="#" class="full-product__btn-to-favorite">
						<i class="far fa-heart"></i>
					</a>



                    <div class="full-product__mob-slider owl-carousel">
                        <div class="full-product__mob-slider-item">
                            <img src="assets/img/product/product.jpg" alt="product">
                        </div>
                        <div class="full-product__mob-slider-item">
                            <img src="assets/img/product/product.jpg" alt="product">
                        </div>
                        <div class="full-product__mob-slider-item">
                            <img src="assets/img/product/product.jpg" alt="product">
                        </div>
                    </div>



					<div class="full-product__sizes" id="sizes"></div>


					<a href="#" id="size-table">Таблица размеров</a>


					<div class="full-product__price">
						<div class="full-product__old-price">1990 грн</div>
						<div class="full-product__cur-price">1490  грн</div>
					</div>
					<div class="full-product__buy-btns">
						<a href="javascript:void(0)" class="full-product__btn-addToCart"><i class="ion-ios-cart"></i><span>Додати до кошика</span></a>
						<a href="javascript:void(0)" class="full-product__btn-call callPhone"><i class="far fa-hand-pointer"></i> <span>Купить в 1 клик</span></a>
					</div>


                    <div class="full-product__info active">
                        <div class="full-product__btn-info"><span>Описание</span></div>
                        <div class="full-product__info-wrapper">
                            <p>Романтичное платье из костюмной итальянской ткани белого цвета, свободного кроя, с юбкой на сборке длиной до середины икры, с завышенной талией и длинными свободными рукавами, с элегантной планкой и пуговицами на груди и маленьким воротничком.</p>
                        </div>

                    </div>
                    <div class="full-product__info">
                        <div class="full-product__btn-info"><span>Оплата и доставка</span></div>
                        <div class="full-product__info-wrapper">

                        <div class="full-product__info-title">
                            <img src="assets/img/logos/logo-hor-ua.png" alt="nova-poshta" ><a href="#" class="full-product__infoD"><i class="ion-ios-information-empty"></i></a>
                        </div>

                        <p>
                            Безкоштовна доставка у відділення при замовленні від 1500 грн. При передоплаті на картку Привата - оплачуєш лише доставку у відділенні. У разі післяплати оплачуєш замовлення у відділенні + комісію Нової пошти за повернення грошей. Обмін та повернення - за наш рахунок.
                        </p>

                        <div class="full-product__info-title">
                            <img src="assets/img/logos/section1.png" alt="section1" >
                            <span>Кур'єрська доставка-примірка (Київ) </span><a href="#" class="full-product__infoD"><i class="ion-ios-information-empty"></i></a>
                        </div>

                        <p>
                            Обирай кілька моделей і розмірів на примірку (або звичайну доставку). Безкоштовна доставка при купівлі на суму понад 1500 грн. Якщо сума менше, або якщо моделі не підійшли - 50 грн за виїзд кур'єра.
                        </p>

                        <div class="full-product__info-title">
                            <img src="assets/img/logos/smv.jpg" alt="smva" >
                            <span>Шоурум у Києві </span><a href="#" class="full-product__infoD"><i class="ion-ios-information-empty"></i></a>
                        </div>

                        <p>
                            Ти завжди можеш приміряти і придбати наш одяг у шоурумі на Сагайдачного 12 (з 12 до 20 без перерв і вихідних).
                            Тут також можна забрати замовлення, оформлене на сайті.
                        </p>
                        </div>
                    </div>

				</div>
			</div>



		</div>
	</section>







</main>



<script type="text/jsx">

    class Size extends React.Component{
        state = {
            size:[
                {name:'XS', val:'xs',checked:false},
                {name:'S', val:'s',checked:false},
                {name:'M', val:'m',checked:false},
                {name:'L', val:'l',checked:false},
            ]
        };


        clickHandler = id => {
            const size  = [...this.state.size];
            for (let i=0; i< size.length; i++){
                size[i].checked = id===i;
            }
            this.setState({size:size});
        };

        render(){

            const sizes = this.state.size.map((size,key)=>{
                return <label key={key} className={size.checked?'active':null}>
                    <input type="radio" name="size" value={size.val} checked={size.checked}/>
                    <span onClick={()=>this.clickHandler(key)}>{size.name}</span>
                </label>
            });

            const popUp = <div class="popUp" id="popSizes">
                <div class="popUp__wrapper">
                    <div class="popUp__close-btn"><i class="ion-close"></i></div>
                    <h2 class="popUp__title">Укажите размер</h2>
                    <div class="popUp__info">{sizes}</div>
                </div>
            </div>;


            return <div>
                {sizes}
                {popUp}
            </div>;
        }


    }

    ReactDOM.render(
        <Size/>,
        document.getElementById('sizes')
    );
</script>




<?php include 'components/footer/footer.php' ?>
<?php include 'components/scripts.php' ?>




