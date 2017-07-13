(function(){
    var titles = document.getElementsByClassName('theNav-primary')[0].getElementsByTagName('a');
    console.log(1)
    var index = 0;
    for(var i = 0; i < titles.length; i++){
        titles[i].index = i;
        titles[i].onclick = function(){
            titles[index].parentElement.className = ''
            this.parentElement.className = 'checked'
            index = this.index
        }
    }
})()