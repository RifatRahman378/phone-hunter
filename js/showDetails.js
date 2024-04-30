const showDetails = async (id) => {
    // console.log(id);
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    // console.log(data);
    const phone = data.data;
    showPhoneDetails(phone)
};
const showPhoneDetails = (phone) => {
    show_details_modal.showModal()
    console.log(phone);
   
    const modal = document.getElementById('modal-box');
    modal.textContent = '';
    const details = document.createElement('div');
    details.innerHTML = `
    <img src="${phone.image}" alt="Shoes" class="rounded-xl mx-auto items-center" />
    <h3 class="font-bold text-lg">phone name : ${phone.name}</h3>
    <h3 class="font-bold text-lg">storage : ${phone.mainFeatures.storage}</h3>
    <h3 class="font-bold text-lg">chipset : ${phone.mainFeatures.chipSet}</h3>
    <h3 class="font-bold text-lg">display size : ${phone.mainFeatures.displaySize}</h3>
    <h3 class="font-bold text-lg">slug : ${phone.slug}</h3>
    <h3 class="font-bold text-lg">Realease Date : ${phone.releaseDate}</h3>
    <h3 class="font-bold text-lg">Brand : ${phone.brand}</h3>
   
    <h3 class="font-bold text-lg">memory : ${phone.mainFeatures.memory}</h3>
    `
    modal.appendChild(details);
}