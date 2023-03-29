let pagination = {
  currentPage: 2,
};

Object.defineProperties(pagination, {
  array: {
    value: [],
    writable: true,
  },
  init: {
    value: (pageItems, pageItemsCount) => {
      for (let i = 0; i < pageItems.length; i++) {
        if (i % pageItemsCount === 0) {
          pagination.array.push([]);
        }
        pagination.array[pagination.array.length - 1].push(pageItems[i]);
      }
      return pagination.array;
    },
  },
  getPageItems: {
    value: () => pagination.array[pagination.currentPage],
  },
  prevPage: {
    value: () => (pagination.currentPage -= 1),
  },
  nextPage: {
    value: () => {
      pagination.currentPage += 1;
      return pagination;
    },
  },
  firstPage: {
    value: () => {
      pagination.array[0];
      return pagination;
    },
  },
  lastPage: {
    value: () => {
      pagination.array[pagination.currentPage.length - 1];
      return pagination;
    },
  },
  goToPage: {
    value: (page) => {
      pagination.currentPage = page;
      return pagination;
    },
  },
});


console.log(pagination);
