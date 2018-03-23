<?php
    include 'components/head.php';
    include 'components/header/header.php';
    $menu = $_GET['menu'];
?>


<main>

	<section class="contacts">
		<div class="wrapper">

			<h2 class="section-title" id="curTab">Контакты</h2>
			<div class="contacts__wrapper">
				<div class="contacts__left">
                    <div class="contacts__left-wrapper">
                        <div class="contacts__menu">

                            <div class="tab <?if($menu!=='shops' && $menu!=='cooperation'):?>active
<?endif;?>" data-tab="contacts">Контакты</div>
                            <div class="tab <?if($menu==='shops'):?>active<?endif;?>" data-tab="shop">Магазины</div>
                            <div class="tab <?if($menu==='cooperation'):?>active<?endif;?>" data-tab="cooperation">Сотрудничество</div>

                        </div>

                    </div>

				</div>
				<div class="contacts__right">

                    <div class="tab-info tab-info--contacts">

                        <div class="tab-info__text">
                            <h3 class="contacts__title">Наши контакты: </h3>
                            <div class="flex">
                                <span>Тел: </span>
                                <a href="tel:+380986408690">+38 098 640 86 90</a>
                            </div>
                            <div class="flex">
                                <span>Email: </span>
                                <a href="mailto:nadirenardi@gmail.com">nadirenardi@gmail.com</a>
                            </div>

                            <br>
                            <h4>График работы:</h4>
                            <p>Пн-Вс: 12.00 — 20.00</p>
                            <br>
                            <h4>Студия:</h4>
                            <p>
                                м.Київ,<br>
                                вул. Сагайдачного, 12
                            </p>
                        </div>



                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.9298819747833!2d30.52044031573176!3d50.46103037947681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce46ce9f6b5b%3A0x7338c34a6bdf1956!2svulytsya+Petra+Sahaidachnoho%2C+12%2C+Kyiv%2C+04070!5e0!3m2!1sen!2sua!4v1521746887400" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>

                    </div>

                    <div class="tab-info tab-info--shop">


                        <div class="tab-info__text">
                            <div class="shop-container">

                                <div class="shop-container__city">
                                    <div class="shop-container__city-title">КИЇВ</div>
                                    <div class="shop-container__shops">

                                        <div class="flex">
                                            <div>
                                                <h4>Шоурум Nadi Renardi</h4>
                                                <a href="#" class="shop-facebook" target="_blank"><i class="ion-social-facebook"></i></a>
                                                <p><b>Адресса: </b>вул. Сагайдачного, 12 <br> (в арку, ліворуч, 2-й поверх)</p>
                                                <p><b>Графік роботи:</b> 12:00—20:00</p>
                                                <p><b>Тел: </b>+38 098 640 86 90</p>
                                            </div>

                                            <div>
                                                <h4>482</h4>
                                                <a href="#" class="shop-facebook" target="_blank"><i class="ion-social-facebook"></i></a>
                                                <p><b>Адресса: </b>вул. Ярославів Вал, 10</p>
                                                <p><b>Графік роботи:</b> 12:00—20:00</p>
                                                <p><b>Тел: </b>+38 099 558 53 53</p>
                                            </div>

                                            <div>
                                                <h4>F’91</h4>
                                                <a href="#" class="shop-facebook" target="_blank"><i class="ion-social-facebook"></i></a>
                                                <p><b>Адресса: </b>ТРЦ "Лавіна Мол" <br>вул. Берковецька, 6Д</p>
                                                <p><b>Графік роботи:</b> 12:00—20:00</p>
                                                <p><b>Тел: </b>+38 099 558 53 53</p>
                                            </div>

                                            <div>
                                                <h4>F’11</h4>
                                                <a href="#" class="shop-facebook" target="_blank"><i class="ion-social-facebook"></i></a>
                                                <p><b>Адресса: </b>ТРЦ "Караван" <br>вул. Лугова, 12</p>
                                                <p><b>Графік роботи:</b> 10:00—22:00</p>
                                            </div>

                                        </div>


                                    </div>
                                </div>

                                <div class="shop-container__city">
                                    <div class="shop-container__city-title">Буча</div>
                                    <div class="shop-container__shops">
                                        <div class="flex flex-a--center">
                                            <div>
                                                <h4>Буча Пасаж</h4>
                                                <a href="#" class="shop-facebook" target="_blank"><i class="ion-social-facebook"></i></a>
                                                <p><b>Адресса: </b>вул. Жовтнева, 66-А
                                                    <br>
                                                    магазин "Стильний жіночий одяг українських виробників" (в ТРЦ "Буча Пасаж")
                                                </p>
                                                <p><b>Графік роботи:</b> 9:00—20:00</p>
                                                <p><b>Тел: </b>+38 099 793 33 98</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="shop-container__city">
                                    <div class="shop-container__city-title">ДНІПРО </div>
                                    <div class="shop-container__shops">
                                        <div class="flex flex-a--center">
                                            <div>
                                                <h4>ТРЦ "Караван", магазин F'91</h4>
                                                <a href="#" class="shop-facebook" target="_blank"><i class="ion-social-facebook"></i></a>
                                                <p><b>Адресса: </b>вул. Нижньодніпровська 17
                                                </p>
                                                <p><b>Графік роботи:</b> 10:00 - 22:00</p>
                                            </div>

                                            <div>
                                                <h4>БУДЬ в UA showroom</h4>
                                                <a href="#" class="shop-facebook" target="_blank"><i class="ion-social-facebook"></i></a>
                                                <p><b>Адресса: </b>пр. Яворницького, 65 (пл. Героїв Майдану)<br>вхід біля Київстару, 5 поверх мармуровими сходами
                                                </p>
                                                <p><b>Графік роботи:</b> 12:00 - 20:00</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div class="shop-container__city">
                                    <div class="shop-container__city-title">ІВАНО-ФРАНКІВСЬК </div>
                                    <div class="shop-container__shops">
                                        <div class="flex flex-a--center">
                                            <div>
                                                <h4>911 Dress Helper</h4>
                                                <a href="#" class="shop-facebook" target="_blank"><i class="ion-social-facebook"></i></a>
                                                <p><b>Адресса: </b>вул. І. Франка 5
                                                </p>
                                                <p><b>Графік роботи:</b> 10:00—20:00</p>
                                                <p><b>Тел:</b> +38 096 054 39 76</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="shop-container__city">
                                    <div class="shop-container__city-title">ІРПІНЬ </div>
                                    <div class="shop-container__shops">
                                        <div class="flex flex-a--center">
                                            <div>
                                                <h4>Шоу-рум Oh La La</h4>
                                                <a href="#" class="shop-facebook" target="_blank"><i class="ion-social-facebook"></i></a>
                                                <p><b>Адресса: </b> ЖК Ірпінські липки,<br> Гостомельське шосе 24/1</p>
                                                <p><b>Графік роботи:</b>

                                                    <br>
                                                    Вт-Пт: 12:00—19:00 <br>
                                                    Сб: 12:00—17:00
                                                </p>
                                                <p><b>Тел:</b> +38 096 956 58 19 </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="shop-container__city">
                                    <div class="shop-container__city-title">Одеса </div>
                                    <div class="shop-container__shops">
                                        <div class="flex flex-a--center">
                                            <div>
                                                <h4>482</h4>
                                                <a href="#" class="shop-facebook" target="_blank"><i class="ion-social-facebook"></i></a>
                                                <p><b>Адресса: </b> вул. Ланжеронівська, 19</p>
                                                <p><b>Графік роботи:</b>12:00—20:00
                                                </p>
                                                <p><b>Тел:</b> +38 067 837-31-31 </p>
                                            </div>

                                            <div>
                                                <h4>F'91</h4>
                                                <a href="#" class="shop-facebook" target="_blank"><i class="ion-social-facebook"></i></a>
                                                <p><b>Адресса: </b> ТРЦ Riviera <br>

                                                    вул. Південна дорога, 101а, Фонтанка, Одеська область
                                                </p>
                                                <p><b>Графік роботи:</b>8:00—20:00</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="shop-container__city">
                                    <div class="shop-container__city-title">ХМЕЛЬНИЦЬКИЙ  </div>
                                    <div class="shop-container__shops">
                                        <div class="flex flex-a--center">
                                            <div>
                                                <h4>ТРЦ "Оазис"</h4>
                                                <a href="#" class="shop-facebook" target="_blank"><i class="ion-social-facebook"></i></a>
                                                <p><b>Адресса: </b> вул. С. Бандеры, 2а</p>
                                                <p><b>Графік роботи:</b>10:00 - 21:00</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div class="shop-container__city">
                                    <div class="shop-container__city-title">ЧЕРНІВЦІ   </div>
                                    <div class="shop-container__shops">
                                        <div class="flex flex-a--center">
                                            <div>
                                                <h4>LOL showroom</h4>
                                                <a href="#" class="shop-facebook" target="_blank"><i class="ion-social-facebook"></i></a>
                                                <p><b>Адресса: </b> вул. Заньковецької, 3</p>
                                                <p><b>Графік роботи:</b>12:00—20:00</p>
                                                <p><b>Тел:</b>+38 066 813 53 13 </p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>

                        <style>
                            #map {
                                width: 100%;
                                height: 600px;
                                background-color: grey;
                            }
                        </style>
                        <div id="map"></div>
                        <script>
                            function initMap() {
                                var uluru = {lat: 50.461028, lng: 30.522635};
                                var from =  {lat: 49.255772, lng: 31.355901};
                                var map = new google.maps.Map(document.getElementById('map'), {
                                    zoom: 7,
                                    center: from,
                                });
                                function NewMarker() {
                                    var marker = new google.maps.Marker({
                                        position: uluru,
                                        map: map
                                    });
                                }
                                NewMarker();



                                //Киев
                                uluru = {lat: 50.449716, lng: 30.512047};
                                NewMarker();

                                uluru = {lat: 50.497142, lng: 30.361274};
                                NewMarker();

                                uluru = {lat: 50.504946, lng: 30.472250};
                                NewMarker();

                                //Буча
                                uluru = {lat: 50.548916, lng: 30.216701};
                                NewMarker();

                                //Днепр
                                uluru = {lat: 48.529502, lng: 35.030905};
                                NewMarker();
                                uluru = {lat: 48.464895, lng: 35.044215};
                                NewMarker();

                                //ИванофРАНКОВСК
                                uluru = {lat: 48.919607, lng: 24.715248};
                                NewMarker();

                                //Ирпинь
                                uluru = {lat: 50.542503, lng: 30.264583};
                                NewMarker();

                                //Одесса
                                uluru = {lat: 46.485054, lng: 30.736971};
                                NewMarker();

                                uluru = {lat: 46.566381, lng: 30.799680};
                                NewMarker();

                                //Хмельницк
                                uluru = {lat: 49.434281, lng: 26.982569};
                                NewMarker();

                                uluru = {lat: 48.293767, lng: 25.932619};
                                NewMarker();


                            }
                        </script>
                        <script async defer
                                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAWLnxbijD8h4QAUz_EGxIqO3u18FexrDY&callback=initMap">

                        </script>

                    </div>
                    <div class="tab-info tab-info--cooperation">

                        <h2>Привіт! Тебе цікавить співпраця з Nadi Renardi?  </h2>
                            <br>
                            <h3>Ти на вірному шляху, якщо:</h3>
                        <p>
                            - у тебе є власний інтернет-магазин, шоурум чи бутік;   <br>
                            - ти працюєш з одягом і шукаєш нових постачальників;   <br>
                            - ти експерт з продажу модних речей або відкриваєш для себе цю сферу;   <br>
                            - тобі подобається одяг українських виробників;   <br>
                            - ти хочеш продавати наші сукні незалежно від перелічених обставин &#128521;   <br>

                            Ми завжди маємо кілька цікавих ідей щодо сумісної роботи.
                        </p>

                        <br>

                        <h3> Найчастіше взаємодіємо двома способами:</h3>
                        <p>
                            - дропшипінг за відсотком від нашої роздрібної ціни; <br>
                            - оптова закупівля – чим більше одиниць товару, тим більше знижка. <br>
                            <br>
                            Обмеження – це не про нас, тому залюбки розглянемо будь-які інші пропозиції.
                            <br> <br>
                            Готові відповісти на твої запитання і обговорити умови за телефоном +380986408690 або поштою nadirenardi@gmail.com. <br> <br>

                            <h4>Гарного дня!</h4>
                        </p>



                    </div>

				</div>
			</div>
		</div>
	</section>

</main>






<?php include 'components/footer/footer.php' ?>
<?php include 'components/scripts.php' ?>
