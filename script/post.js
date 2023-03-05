let text_area = document.getElementById('textarea-comment');
let comment_card_container = document.getElementById('comment-card-container');
const addComment = () => {
    if(text_area.value === '') 
        return;
    console.log('hiii');
    console.log(text_area.value);
    comment_card_container.innerHTML += `<p>${text_area.value}</p>`;
    text_area.value = '';
    
}
let countL = 0;
let countH = 0;
const likeCount =() => {
    countL++;
    document.getElementById('count-like').innerHTML = `${countL}`;

}

const heartCount = () => {
    countH++;
    document.getElementById('count-heart').innerHTML = `${countH}`;
}