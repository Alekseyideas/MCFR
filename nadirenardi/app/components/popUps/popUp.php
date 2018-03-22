<?php
function PopUpFunc($id,$title,$content,$mod=''){
	echo '
			<div class="popUp" id="'.$id.'">
				<div class="popUp__wrapper">
					<div class="popUp__close-btn"><i class="ion-close"></i></div>
					<h2 class="popUp__title">'.$title.'</h2>
					<div class="popUp__info '.$mod.'">'.$content.'</div>
				</div>
			</div>;
			 ';
}

?>

