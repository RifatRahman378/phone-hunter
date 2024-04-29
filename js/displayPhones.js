const displayPhones = phones => {
    const phoneContainer = document.getElementById('card-container');
    phoneContainer.textContent = "";
    const show = document.getElementById('showall-container')
    if (phones.length > 12) {
        show.classList.remove('hidden');
    }
    else {
        show.classList.add('hidden')
    }
    phones = phones.slice(0, 12);
    phones.forEach(phone => {
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
        <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions">
        <button class="btn btn-primary">Buy Now</button>
        </div>
        </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
};
