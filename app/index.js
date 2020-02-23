const body = document.querySelector('body');
const loginBtn = document.querySelector('.header__sign-in-block');
const loginPage = `<div class="login-block">
    <div class="login-block__left-col left-col">
        <header class="login-block__header">
            <h1 class="login-block__heading">
                <img class="login-block__logo-img" src="./assets/logo.png" alt="logo">
            </h1>
        </header>
        <div class="left-col__account-block">
            <div class="left-col__progress-block progress-block">
                <img class="progress-block__point-img" src="./assets/point-sign.png" alt="point">
                <div class="progress-block__progress-line">
                    <div class="progress-block__line"></div>
                </div>
                <div class="progress-block__steps-name">
                    <span class="progress-block__name progress-block__name_active">Create an account</span>
                    <span class="progress-block__name progress-block__name_active">Billing address</span>
                    <span class="progress-block__name progress-block__name">Payment</span>
                </div>
            </div>
            <div class="left-col__digital-block digital-block">
                <h2 class="digital-block__heading">Digital</h2>
                <span class="digital-block__cost">99&#8373; 4 weeks only
                    then $1.99/week
                </span>
            </div>
            <div class="left-col__log-in-block log-in-block">
                <h2 class="log-in-block__heading">Create an account</h2>
                <span class="log-in-block__text">Already have an account?<strong> LOG IN</strong></span>
                <div class="log-in-block__btns-block">
                    <button class="log-in-block__btn log-in-block__btn_blue">
                        <strong>FACEBOOK</strong>
                    </button>
                    <button class="log-in-block__btn log-in-block__btn_white">
                        GOOGLE
                    </button>
                </div>
            </div>
            <form class="form" method="" action="#" onsubmit="return false;">
                <div class="form__email-block">
                    <span>Email</span>
                    <input class="email" type="text" name="email" placeholder="Email">
                </div>
                <div class="form__password-block">
                    <span>Password</span>
                    <input class="password" type="password" name="password" placeholder="Password">
                    <div class="form__show-password">Show</div>
                </div>
                <span class="form__price">Price: $ 0.99</span>
                <button class="form__btn">CONTINUE</button>
            </form>
        </div>
        <footer class="footer log-in-block__footer">
            <nav class="footer__nav log-in-block__nav">
                <a class="footer__item" href="">Home</a>
                <a class="footer__item" href="">FAQ</a>
                <a class="footer__item" href="">Contact Us</a>
                <a class="footer__item" href="">Terms of Service</a>
                <a class="footer__item" href="">Privacy Policy</a>
            </nav>
        </footer>
    </div>
    <aside class="login-block__right-col right-col">
        <div class="right-col__top-block">
            <span class="right-col__order">Your order</span>
            <img class="right-col__img" src="./assets/basket.png" alt="basket">
        </div>
        <div class="right-col__bottom-block">
            <h2 class="right-col__heading">Digital Access</h2>
            <p class="right-col__article">Unlimited access to website, and<br>
                the smartphone and tablet apps.<br> $0.99</p>
            <span class="right-col__sales-text">Sales tax may apply.</span>
            <span class="right-col__total">Total: $0.99</span>
        </div>
    </aside>
</div>`;

loginBtn.addEventListener('click', () => {
    body.innerHTML = '';
    body.insertAdjacentHTML('beforeend', loginPage);
    body.style.display = 'block';
    body.style.minHeight = 'auto';
    postData();
    showPassword();
});

function postData() {
    const postButton = document.querySelector('.form__btn');
    postButton.addEventListener('click', () => {
        request();
    });
}

async function request() {
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;

    let response = await fetch('./back.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
    });

    try {
        const json = await response.json();
        const message = 'Success!';
        body.insertAdjacentHTML('beforeend', `<div class="message-block">
            <span>Status: ${message}</span>
        </div>`);
    } catch (error) {
        body.insertAdjacentHTML('beforeend', `<div class="message-block">
            <span>Status: ${error}</span>
        </div>`);
    }
}

function showPassword() {
    const showBtn = document.querySelector('.form__show-password');

    showBtn.addEventListener('click', () => {
        const passwordInput = document.querySelector('.password');
        
        if (passwordInput.type === 'text') {
            passwordInput.setAttribute('type', 'password');
        } else {
            passwordInput.setAttribute('type', 'text');
        }
    });
}
