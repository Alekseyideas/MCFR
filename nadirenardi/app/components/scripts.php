
<div id="js-mobile"></div>
<div id="js-tablet"></div>
<div id="js-desktop"></div>

<?php include "components/popUps/popUp.php" ?>



<!--Попап Розмірна сітка-->
<?
$popUpContent = ' <img src="assets/img/main/sizes.png"> ';
PopUpFunc('rozmirna-sitka','Розмірна сітка',$popUpContent)
?>
<!--Попап регистрация-->
<?
$popUpContent = ' 
    
    <div class="popUp__body">
        <form class="enter-form">
            <div class="form-group">
                <input type="email" required>
            </div>
            <div class="form-group">
                <input type="password" required>
            </div>
            <a href="#">Забула свій пароль?</a>
            
            <label class="flex flex--a-center">
                <input type="checkbox" class="default-checkbox">
                <span>Запам\'ятати мене</span>
            </label>
            
            <button type="button" class="enter-to-shop">Увійти</button>
        </form>
        
        <div class="register__popUp">
            <h3>Регистрация</h3>
            <div class="form-group">
                <a href="" class="btnReg">Google</a>
            </div>
            <div class="form-group">
                <a href="" class="btnReg">Facebook</a>
            </div>
        </div>
    </div>
    <div class="popUp__footer">
      <button type="button" class="enter-to-shop">Увійти</button>
      <button type="button" class="register-to-shop">Регистрация</button>
</div>
  ';
PopUpFunc('popUpEnter','УВІЙТИ В ІНТЕРНЕТ МАГАЗИН NADI RENARDI',$popUpContent,'popUp__info--enter')
?>

<!--Попап обратній звонок-->
<?
$popUpContent = '
 
 <form class="oneClick-form">
    <h3>Залиш свій номер телефона</h3>
    <div class="form-group">
        <input type="tel" placeholder="+38 (050) 123-45-67">
    </div>
    <p>
        і наші феї зв\'яжуться з тобою найближчим часом та узгодять всі деталі замовлення
    </p>
    <button class="oneClick-form-btn">Отправить</button>
 </form>
 
 ';
PopUpFunc('callBack','КУПИТИ В 1 КЛІК',$popUpContent)
?>


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min.js"></script>
<script src="assets/js/bundle.js?<?echo rand()?>"></script>
<script src="assets/js/edit.js?<?echo rand()?>"></script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.24.0/babel.js"></script>
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>

</body>
</html>