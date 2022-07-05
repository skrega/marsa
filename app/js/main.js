$(function () {
    // Слайдер 
    $('.main-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        speed: 800,
        pauseOnHover: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev main-slide-btn"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" transform="rotate(-180 20 20)" fill="#F8EDDF"/><path d="M20 12L12 20M12 20L20 28M12 20L28 20" stroke="#EC5A33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next main-slide-btn"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#F8EDDF"/><path d="M20 28L28 20M28 20L20 12M28 20L12 20" stroke="#EC5A33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        responsive: [{
                breakpoint: 478,
                settings: {
                    arrows: false
                }
            },

        ]
    });

    // Validator инизиализация
    window.onload = () => {
        document.getElementById('form').addEventListener('submit', e => {
            let valid = new Validator('form');
            if (!valid.valid) {
                e.preventDefault();
            }
        })
    }

    // Popup
    Fancybox.bind("[data-fancybox]", {
        autoFocus: false,
    });

    // Передача названия эксурсии в скрытый input
    document.addEventListener("DOMContentLoaded", () => {
        const buttons = document.querySelectorAll('.tour-item');
        const excursion = document.getElementById('excursion')

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", () => {
                const parent = buttons[i];
                const title = parent.querySelector('.tour-item__heading').textContent;
                excursion.setAttribute('value', title);

            }, false);
        }
    });

    // Отправка формы
    $('#form').on('submit', function () {
        if (document.form.name.value == '' && document.form.phone.value == '') {
            valid = false;
            return valid;
        }
        if (document.form.phone.value.length < 17 && document.form.phone.value.length < 18) {
            valid = false;
            return valid;
        }
        $.ajax({
            type: "POST",
            url: "mail/mail.php",
            data: $(this).serialize()
        }).done(function () {

            Fancybox.close('[data-fancybox]');

            Fancybox.show([{
                    src: "#popup-success",
                    type: "inline",
                },

            ], );

            setTimeout(function () {
                // Done Functions
                $('#form').trigger("reset");
            }, 2000);
        });
        return false;
    });




})