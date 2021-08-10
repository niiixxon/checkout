

function ValidationModule({ form, inputs, submit }) {
    const state = {
        form,
        inputs,
        submit
    };
    function focus ({ target }) {
        if (target,defaultValue === target.value) {
            target.value = '';
        }
    }

    function blur ({ target }) {
        const defaultClassName = target.className.split(' ')[0];
        if (target.value === '') {
            target.value = target.defaultValue;
            target.className = defaultClassName;
            return;
        }
        target.className = `${defaultClassName} ${defaultClassName}--valid`;
    }

    function delegateEvent(event) {
        if (event.target.nodeName === 'INPUT') {
            return;
        }
        if (event.type === 'focus') {
            return focus(event);
        }
        if (event.type === 'blur') {
            return blur(event);
        }
    }

    function blindEvents() {
        form.addEventListener( 'focus', delegateEvent, true );
        form.addEventListener( 'blur', delegateEvent, true );
    }
    return {
        blindEvents
    };
}

function checkoutForm() {
    const form = document.querySelector('[data-form]');
    const cardTypes = form.querySelector('[data-card-types]');
    const data = {
        form,
        inputs: form.querySelectorAll('[data-input]'),
        submit: form.querySelector('[data-submit]')
    };
    function toggleCardType({ target }) {
        const cardImage = form.querySelector('[data-card-image]');
        const cardTypeValue = target.getAttribute('data-card-type');
        const cardPath = 'https://svgshare.com/i/';
        const cardTypeData = {
            visa: { src: `${cardPath}7h2.svg`, alt: 'Visa Card' },
            mastercard: { src: `${cardPath}7f2.svg`, alt: 'MasterCard' },
            amex: { src: `${cardPath}7gd.svg`, alt: 'American Express Card' },
            discover : { src: `${cardPath}7hp.svg`, alt: 'Discover Card' }
        };
        if (cardTypeData.hasOwnProperty(cardTypeValue)) {
            const data = Object.getOwnPropertyDescriptor(cardTypeData, cardTypeValue);
            cardImage.src = data.value.src;
            cardImage.alt = data.value.alt;
        }
    }

function init() {
    const validation = new ValidationModule(data);
    cardTypes.addEventListener('click', toggleCardType);
    validation.blindEvents();
}
init();
}
checkoutForm();
