const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    dataLoad(searchText);
    loading(true);
};
const loading = (isLoading) => {
    const spinner = document.getElementById('loading-screen');

    if (isLoading) {
        spinner.classList.remove('hidden');
    }
    else {
        spinner.classList.add('hidden')
    }
}