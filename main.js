//Add a listener for our button
const btn1 = document.querySelector('.btn');
btn1.addEventListener('click', ChangeBackground);

//Change the color of the page background and the form background based on what the user enters on the form
function ChangeBackground(e)
{
    e.preventDefault();
    var colorForPageBackground = document.getElementById('pageBackgroundColor').value;
    document.querySelector('body').style.background = colorForPageBackground;
    var colorForFormBackground = document.getElementById('formBackgroundColor').value;
    document.querySelector('#my-form').style.background = colorForFormBackground;
}
