const handleSearch = (isShowAll) => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    dataLoad(searchText, isShowAll);
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
const showAll = () => {
    handleSearch(true)
}