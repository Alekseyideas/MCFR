export const News = ()=> {

    const news = {
      left: document.getElementById('newsLeft'),
      right: document.getElementById('newsRight'),
      rightArticle: function () {
        return this.right.getElementsByClassName('article');
      },
        leftArticle: function () {
            return this.left.getElementsByClassName('article')[0];
        }
    };

    if(news.right){
        let  rightHeight = news.right.offsetHeight;
        news.leftArticle().style.height = rightHeight===0 ? '700px' : rightHeight + 'px';
    }



};