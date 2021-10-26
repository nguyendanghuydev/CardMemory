const livesCount = document.querySelector('.livesCount');
const section = document.querySelector('.section');
console.log(livesCount);
console.log(section);

let lives = 8;

const randomCards = ()=>{
    const listImg = [
        {urlImg:'./img/bh.jpg',name:'couple1'},
        {urlImg:'./img/suzy.jpg',name:'couple1'},
        {urlImg:'./img/lisa.jpg',name:'couple2'},
        {urlImg:'./img/Jin.jpg',name:'couple2'},
        {urlImg:'./img/hope.jpg',name:'couple3'},
        {urlImg:'./img/ryuin.jpg',name:'couple3'},
        {urlImg:'./img/jinmin.jpg',name:'couple4'},
        {urlImg:'./img/jisoo.jpg',name:'couple4'},
        {urlImg:'./img/jk.jpg',name:'couple5'},
        {urlImg:'./img/iu.jpg',name:'couple5'},
        {urlImg:'./img/jn.jpg',name:'couple6'},
        {urlImg:'./img/jisoo.jpg',name:'couple6'},
        {urlImg:'./img/lhr.jpg',name:'couple7'},
        {urlImg:'./img/rose.jpg',name:'couple7'},
        {urlImg:'./img/bh.jpg',name:'couple8'},
        {urlImg:'./img/teayeon.jpg',name:'couple8'},
    ]
    
    listImg.sort(()=>{
        return Math.random() - 0.5
    })
    console.log(listImg);
    return listImg
}

const createCard = ()=>{
    const cardData = randomCards();
    cardData.forEach(cardItem=>{
        const card = document.createElement('div')
        card.classList.add('card')
        const img = document.createElement('img')
        img.classList.add('img')
        const back = document.createElement('div')
        back.classList.add('back')
        
        card.setAttribute("name",cardItem.name)
        img.src = cardItem.urlImg

        card.addEventListener('click',(e)=>{
            card.classList.toggle('toggleCard')
            checkCard(e)
        })

        card.appendChild(img)
        card.appendChild(back)
        section.appendChild(card)
    })
}

const checkCard = (e)=>{
    const clicked = e.target.closest('.card');
    clicked.classList.add('flipped')
    const flippedAll = document.querySelectorAll('.flipped')
    const toggleCards = document.querySelectorAll('.toggleCard')
    if(flippedAll.length === 2){
        if(flippedAll[0].getAttribute('name') === flippedAll[1].getAttribute('name')){
            flippedAll.forEach(card=>{
                card.classList.remove('flipped')
                card.style.pointerEvents = 'none'
            })
        }else{
            flippedAll.forEach((card=>{
                card.classList.remove('flipped')
                setTimeout(() => {
                    card.classList.remove('toggleCard')
                }, 1000);
            }))
            lives--;
            livesCount.textContent = lives;
            if(lives === 0){
                alert('u stupid try again')
                reset();
            }
        }
    }
    if(toggleCards.length === 16){
        document.querySelector('.modal').style.display = 'block'
    }
}
const reset = ()=>{
    const cardData = randomCards();
    const cards = document.querySelectorAll('.card')
    const imgs = document.querySelectorAll('.img');
    cardData.forEach((item,index)=>{
        cards[index].classList.remove('toggleCard')
        setTimeout(() => {
            cards[index].style.pointerEvents = 'all'
            imgs[index].src= item.urlImg
            cards[index].setAttribute('name',item.name)
        }, 1000);
    })
    lives = 8
    livesCount.textContent = lives;
}
createCard();